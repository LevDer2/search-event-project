import getApi from './getApi.js';

const list = document.querySelector('.hero__list');
const searchInput = document.querySelector('.header__inp');
const searchBtn = document.querySelector('.header__btn');
const countrySelect = document.querySelector('.header__input');

function truncateText(text, maxLength = 60) {
  if (!text) return '';
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text;
}

function truncateTitleToOneLine(text, maxLength = 50) {
  if (!text) return '';
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text;
}

function createEventCard(event, index) {
  let image = './img/modal-decstop.jpg';
  if (event.images?.length) {
    for (let img of event.images) {
      if (img.width >= 640) {
        image = img.url;
        break;
      }
    }
    if (image === './img/modal-decstop.jpg') image = event.images[0].url;
  }

  const title = truncateTitleToOneLine(event.name, 30);
  const place = truncateText(
    event._embedded?.venues?.[0]?.name || 'Unknown',
    15
  );
  const date = event.dates?.start?.localDate || 'Unknown date';
  const imgPlaceholder =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=';

  return `
    <li class="hero__item" data-index="${index}">
      <div class="hero__card">
        <img class="hero__icon" src="${imgPlaceholder}" alt="fons">
        <img class="hero__images" src="${image}" alt="${title}" />
        <h3 class="hero__title">${title}</h3>
        <div class="hero__box">
          <svg class="hero__img"><use href="./img/symbol-defs.svg#icon-place"></use></svg>
          <h4 class="hero__desk">${place}</h4>
        </div>
        <p class="hero__text">${date}</p>
      </div>
    </li>
  `;
}

function renderEvents(events) {
  window.lastEvents = events;
  list.innerHTML = events.map((ev, i) => createEventCard(ev, i)).join('');
}

function buildQuery() {
  const keyword = searchInput.value.trim();
  const country = countrySelect.value;
  let query = '&size=30';
  if (keyword) query += '&keyword=' + encodeURIComponent(keyword);
  if (country) query += '&countryCode=' + country;
  return query;
}

function loadEvents() {
  getApi(buildQuery())
    .then(data => {
      const events = data._embedded?.events || [];
      if (events.length > 0) renderEvents(events);
      else list.innerHTML = '<li>Nothing found</li>';
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

document.addEventListener('DOMContentLoaded', async () => {
  await fillCountrySelect(countrySelect);
  loadEvents();
});

