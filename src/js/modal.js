const back = document.querySelector('.backdrop');
const closeEl = document.querySelector('.modal__btn');
const modal = document.querySelector('.modal__file');
const listEl = document.querySelector('.hero__list');

closeEl.addEventListener('click', function () {
  back.style.opacity = '0';
  back.style.pointerEvents = 'none';
});

back.addEventListener('click', function (e) {
  if (e.target === back) {
    back.style.opacity = '0';
    back.style.pointerEvents = 'none';
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    back.style.opacity = '0';
    back.style.pointerEvents = 'none';
  }
});

listEl.addEventListener('click', function (e) {
  let card = e.target.closest('.hero__item');
  if (!card) return;

  let index = Array.prototype.indexOf.call(listEl.children, card);
  let ev = window.lastEvents[index];
  if (!ev) return;

  renderModal(ev);
  back.style.opacity = '1';
  back.style.pointerEvents = 'all';
});

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}

function renderModal(ev) {
  let info = 'No description';
  if (ev.info) info = ev.info;
  else if (ev.description) info = ev.description;
  info = truncateText(info, 120);

  let date = '—';
  if (ev.dates && ev.dates.start && ev.dates.start.localDate)
    date = ev.dates.start.localDate;

  let time = '—';
  if (ev.dates && ev.dates.start && ev.dates.start.localTime)
    time = ev.dates.start.localTime;

  let city = '';
  let country = '';
  let venue = '';
  if (ev._embedded && ev._embedded.venues && ev._embedded.venues.length > 0) {
    city = ev._embedded.venues[0].city.name;
    country = ev._embedded.venues[0].country.name;
    venue = ev._embedded.venues[0].name;
  }

  let artist = ev.name;
  if (
    ev._embedded &&
    ev._embedded.attractions &&
    ev._embedded.attractions.length > 0
  ) {
    artist = ev._embedded.attractions[0].name;
  }

  let priceMin = '—';
  let priceMax = '—';
  let currency = '';
  if (ev.priceRanges && ev.priceRanges.length > 0) {
    priceMin = ev.priceRanges[0].min;
    priceMax = ev.priceRanges[0].max;
    currency = ev.priceRanges[0].currency;
  }

  let poster = './img/modal-decstop.jpg';
  let logo = './img/modal-logo.jpg';
  if (ev.images && ev.images.length > 0) {
    for (let i = 0; i < ev.images.length; i++) {
      if (ev.images[i].width >= 640) {
        poster = ev.images[i].url;
        break;
      }
    }
    if (poster === './img/modal-decstop.jpg') poster = ev.images[0].url;
    logo = ev.images[0].url;
  }

  modal.innerHTML = `
    <img src="${logo}" alt="logo" class="modal__img">
    <div class="modal__box">
      <img src="${poster}" alt="poster" class="modal__images">
      <ul class="modal-list">
        <li class="modal__item">
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${info}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${date}</p>
          <p class="modal__text">${time} (${city}/${country})</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${city}, ${country}</p>
          <p class="modal__text">${venue}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text modal__artist">${artist}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__bex">
           <img class="modal__icon" src="../img/ticket.png" alt="icon">
            <p class="modal__desk">Standart ${priceMin}-${priceMax} ${currency}</p>
          </div>
          <button class="modal__button" data-url="${ev.url}">BUY TICKETS</button>
        </li>
      </ul>
    </div>
  `;

  let buyBtn = modal.querySelector('.modal__button');
  if (buyBtn) {
    buyBtn.addEventListener('click', function () {
      window.open(this.dataset.url, '_blank');
    });
  }

  let moreBtn = document.querySelector('.modal__sub');
  if (moreBtn) {
    moreBtn.onclick = function () {
      window.open('https://www.google.com/search?q=' + artist, '_blank');
    };
  }
}
