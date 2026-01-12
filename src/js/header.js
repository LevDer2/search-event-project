// 
import getApi from './getApi.js';

const list = document.querySelector('.hero__list');
const searchInput = document.querySelector('.header__inp');
const searchBtn = document.querySelector('.header__btn');
const countrySelect = document.querySelector('.header__input');

let lastEvents = [];

// Функція обрізки тексту
function truncateText(text, maxLength = 60) {
  if (!text) return '';
  return text.length <= maxLength
    ? text
    : text.slice(0, maxLength).trim() + '...';
}

// Створення однієї події
function createEventCard(event) {
  // Локальна іконка (обов'язково відображається на GitHub Pages)
  const iconImage = 'img/img-event.png';

  // Динамічна картинка події з API, fallback на локальну
  let image = 'img/modal-desktop.jpg';
  if (event.images && event.images.length > 0) {
    const largeImage = event.images.find(img => img.width >= 640);
    image = largeImage ? largeImage.url : event.images[0].url;
  }

  const title = event.name || 'No title';
  const date = event.dates?.start?.localDate || 'Unknown date';

  let place = 'Unknown place';
  if (event._embedded?.venues?.length > 0) {
    place = event._embedded.venues[0].name || place;
  }
  place = truncateText(place, 15);

  return `
    <li class="hero__item">
      <div class="hero__card">
        <!-- Локальна іконка -->
        <img class="hero__icon" src="${iconImage}" alt="fons">

        <!-- Картинка події -->
        <img src="${image}" alt="${title}" class="hero__images" />

        <h3 class="hero__title">${title}</h3>
        <div class="hero__box">
          <svg class="hero__img">
            <use href="img/symbol-defs.svg#icon-place"></use>
          </svg>
          <h4 class="hero__desk">${place}</h4>
        </div>
        <p class="hero__text">${date}</p>
      </div>
    </li>
  `;
}

// Рендер списку подій
function renderEvents(events) {
  if (!events || events.length === 0) {
    list.innerHTML = '<li>Nothing found</li>';
    return;
  }
  list.innerHTML = events.map(createEventCard).join('');
  window.lastEvents = events;
}

// Формування запиту для API
function buildQuery() {
  const keyword = searchInput.value.trim();
  const country = countrySelect.value;

  let query = '&size=30';
  if (keyword) query += '&keyword=' + encodeURIComponent(keyword);
  if (country) query += '&countryCode=' + encodeURIComponent(country);

  return query;
}

// Завантаження подій
function loadEvents() {
  getApi(buildQuery())
    .then(data => {
      const events = data._embedded?.events || [];
      lastEvents = events;
      renderEvents(events);
    })
    .catch(err => {
      console.error(err);
      list.innerHTML = '<li>Nothing found</li>';
    });
}

// Обробники подій для пошуку
searchBtn.addEventListener('click', e => {
  e.preventDefault();
  loadEvents();
});

searchInput.addEventListener('input', loadEvents);
countrySelect.addEventListener('change', loadEvents);

// Завантаження країн для select
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

// Заповнення select елементу
async function fillCountrySelect(selectEl) {
  const countries = await loadCountriesForSelect();
  const allOption = `<option value="">Choose country</option>`;
  const options = countries
    .map(c => `<option value="${c.code}">${c.name} (${c.code})</option>`)
    .join('');

  selectEl.innerHTML = allOption + options;
  selectEl.value = '';
}

// Старт після завантаження DOM
document.addEventListener('DOMContentLoaded', async () => {
  await fillCountrySelect(countrySelect);
  loadEvents();
});
