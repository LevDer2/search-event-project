import getApi from './getApi';


const list = document.querySelector('.hero__list');
const searchInput = document.querySelector('.header__inp');
const searchBtn = document.querySelector('.header__btn');
const countrySelect = document.querySelector('.header__input');


let lastEvents = [];


function createEventCard(event) {
  const image =
    event.images?.find(img => img.width >= 640)?.url ||
    event.images?.[0]?.url ||
    './img/modal-decstop.jpg';

  const title = event.name;
  const date = event.dates.start.localDate;
  const place = event._embedded?.venues?.[0]?.name || 'Unknown place';

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

  if (keyword) query += `&keyword=${encodeURIComponent(keyword)}`;
  if (country) query += `&countryCode=${country}`;

  return query;
}


function loadEvents() {
  getApi(buildQuery())
    .then(data => {
      lastEvents = data._embedded?.events || [];
      renderEvents(lastEvents);
    })
    .catch(() => {
      list.innerHTML = '<li>Nothing found</li>';
    });
}

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  loadEvents();
});

searchInput.addEventListener('input', loadEvents);
countrySelect.addEventListener('change', loadEvents);

loadEvents();
