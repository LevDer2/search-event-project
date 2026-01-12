import getApi from './getApi.js';

const list = document.querySelector('.hero__list');
const searchInput = document.querySelector('.header__inp');
const searchBtn = document.querySelector('.header__btn');
const countrySelect = document.querySelector('.header__input');

let lastEvents = [];

function truncateText(text, maxLength = 60) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

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
  const date = event.dates?.start?.localDate || 'Unknown date';

  let place = 'Unknown place';
  if (event._embedded?.venues?.length > 0) {
    place = event._embedded.venues[0].name || place;
  }

  place = truncateText(place, 15);

  return `
    <li class="hero__item">
      <div class="hero__card">
        <img class="hero__icon" ./img/img-event.png" alt="fons">
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
  window.lastEvents = events;
}

function buildQuery() {
  const keyword = searchInput.value.trim();
  const country = countrySelect.value;

  let query = '&size=30';
  if (keyword.length > 0) query += '&keyword=' + encodeURIComponent(keyword);
  if (country.length > 0) query += '&countryCode=' + country;

  return query;
}

function loadEvents() {
  getApi(buildQuery())
    .then(data => {
      if (data._embedded?.events?.length > 0) {
        lastEvents = data._embedded.events;
        renderEvents(lastEvents);
      } else {
        list.innerHTML = '<li>Nothing found</li>';
      }
    })
    .catch(err => {
      console.error(err);
      list.innerHTML = '<li>Nothing found</li>';
    });
}

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  loadEvents();
});

searchInput.addEventListener('input', loadEvents);
countrySelect.addEventListener('change', loadEvents);

async function loadCountriesForSelect() {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,cca2'
  );
  const data = await res.json();

  return data
    .filter(c => c.cca2 && c.name?.common)
    .map(c => ({ code: c.cca2, name: c.name.common }))
    .sort((a, b) => a.name.localeCompare(b.name, 'uk'));
}

async function fillCountrySelect(selectEl) {
  const countries = await loadCountriesForSelect();
  const allOption = `<option value="">Choose country</option>`;
  const options = countries
    .map(c => `<option value="${c.code}">${c.name} (${c.code})</option>`)
    .join('');

  selectEl.innerHTML = allOption + options;
  selectEl.value = '';
}

async function fetchEvents(countryCode = '') {
  let url = `https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl`;
  if (countryCode) url += `&countryCode=${encodeURIComponent(countryCode)}`;
  const res = await fetch(url);
  return res.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  await fillCountrySelect(countrySelect);
  loadEvents();
  countrySelect.addEventListener('change', loadEvents);
});
