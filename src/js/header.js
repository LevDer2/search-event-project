import getApi from './getApi.js';

const list = document.querySelector('.hero__list');
const searchInput = document.querySelector('.header__inp');
const searchBtn = document.querySelector('.header__btn');
const countrySelect = document.querySelector('.header__input');

let lastEvents = [];


function createEventCard(event) {
  let image = './img/modal-decstop.jpg';

  if (event.images && event.images.length > 0) {
    for (let i = 0; i < event.images.length; i++) {
      if (event.images[i].width >= 640) {
        image = event.images[i].url;
        break;
      }
    }
    if (image === './img/modal-decstop.jpg') {
      image = event.images[0].url;
    }
  }

  const title = event.name;
  const date =
    event.dates && event.dates.start && event.dates.start.localDate
      ? event.dates.start.localDate
      : 'Unknown date';

  let place = 'Unknown place';
  if (event._embedded) {
    if (event._embedded.venues && event._embedded.venues.length > 0) {
      if (event._embedded.venues[0].name) {
        place = event._embedded.venues[0].name;
      }
    }
  }

  return `
    <li class="hero__item">
      <div class="hero__card">
        <img class="hero__icon" src="./img/img-event.svg" alt="">
        <img src="${image}" alt="${title}" class="hero__images" />
        <h3 class="hero__title">${title}</h3>
        <div class="hero__box">
          <svg class="hero__img">
            <use href="./img/symbol-defs.svg#icon-place"></use>
          </svg>
          <h4 class="hero__desk">${place}</h4>
        </div>
        <p class="hero__text">${date}</p>
      </div>
    </li>
  `;
}

function renderEvents(events) {
  list.innerHTML = events.map(createEventCard).join('');
}

function buildQuery() {
  const keyword = searchInput.value.trim();
  const country = countrySelect.value;

  let query = '&size=30';
  if (keyword && keyword.length > 0) {
    query += '&keyword=' + encodeURIComponent(keyword);
  }
  if (country && country.length > 0) {
    query += '&countryCode=' + country;
  }
  return query;
}


function loadEvents() {
  getApi(buildQuery())
    .then(function (data) {
      if (
        data._embedded &&
        data._embedded.events &&
        data._embedded.events.length > 0
      ) {
        lastEvents = data._embedded.events;
        renderEvents(lastEvents);
      } else {
        list.innerHTML = '<li>Nothing found</li>';
      }
    })
    .catch(function (err) {
      console.error(err);
      list.innerHTML = '<li>Nothing found</li>';
    });
}


searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  loadEvents();
});

searchInput.addEventListener('input', loadEvents);
countrySelect.addEventListener('change', loadEvents);

loadEvents();
