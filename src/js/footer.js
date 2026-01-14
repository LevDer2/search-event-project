// ! Server

import getApi from './getApi.js';

// ! Elements
const paginationNav = document.querySelector('.pagination');
const list = document.querySelector('.hero__list');
const searchInput = document.querySelector('.header__inp');
const searchBtn = document.querySelector('.header__btn');
const countrySelect = document.querySelector('.header__input');

if (!paginationNav || !list) {
  // нічого не робимо
} else {
  const PAGE_SIZE = 30;
  const visibleCount = 5;

  let currentPageUI = 1;
  let totalPages = 1;

  let debounceTimer = null;

  function capTotalPages(total, size) {
    const maxPages = Math.floor(999 / size) + 1;
    return Math.min(total, maxPages);
  }

  function truncateText(text, maxLength = 60) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  }

  function truncateTitleToOneLine(text, maxLength = 50) {
    if (!text) return '';
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

    const title = truncateTitleToOneLine(event.name, 30);
    const date = event.dates?.start?.localDate || 'Unknown date';

    const img =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=';

    let place = 'Unknown place';
    if (event._embedded?.venues?.length > 0) {
      place = event._embedded.venues[0].name || place;
    }
    place = truncateText(place, 15);

    return `
      <li class="hero__item">
        <div class="hero__card">
          <img class="hero__icon" src="${img}" alt="fons">
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
    const keyword = searchInput ? searchInput.value.trim() : '';
    const country = countrySelect ? countrySelect.value : '';

    const apiPage = currentPageUI - 1;

    let query = `&size=${PAGE_SIZE}&page=${apiPage}`;

    if (keyword.length > 0) query += '&keyword=' + encodeURIComponent(keyword);
    if (country.length > 0) query += '&countryCode=' + country;

    return query;
  }

  function renderPagination() {
    paginationNav.innerHTML = '';

    const addBtn = (label, pageUI, opts = {}) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'page';
      btn.textContent = label;

      if (opts.disabled) btn.disabled = true;
      if (opts.active) btn.classList.add('is-active');
      if (pageUI != null) btn.dataset.page = String(pageUI);

      paginationNav.appendChild(btn);
    };

    const half = Math.floor(visibleCount / 2);

    let start = currentPageUI - half;
    let end = currentPageUI + half;

    if (start < 1) {
      end += 1 - start;
      start = 1;
    }
    if (end > totalPages) {
      start -= end - totalPages;
      end = totalPages;
    }
    start = Math.max(1, start);

    addBtn('«', currentPageUI - 1, { disabled: currentPageUI === 1 });

    if (start > 1) {
      addBtn('1', 1, { active: currentPageUI === 1 });
      if (start > 2) addBtn('...', null, { disabled: true });
    }

    for (let p = start; p <= end; p += 1) {
      addBtn(String(p), p, { active: p === currentPageUI });
    }

    if (end < totalPages) {
      if (end < totalPages - 1) addBtn('...', null, { disabled: true });
      addBtn(String(totalPages), totalPages, {
        active: currentPageUI === totalPages,
      });
    }

    addBtn('»', currentPageUI + 1, { disabled: currentPageUI === totalPages });
  }

  function loadEvents() {
    list.innerHTML = '<li class="hero__item">Loading...</li>';

    getApi(buildQuery())
      .then(data => {
        if (data && data.page && typeof data.page.totalPages === 'number') {
          totalPages = capTotalPages(data.page.totalPages, PAGE_SIZE);
        } else {
          totalPages = 1;
        }

        if (currentPageUI > totalPages) currentPageUI = totalPages;
        renderPagination();

        const events = data._embedded?.events || [];
        if (events.length > 0) {
          renderEvents(events);
        } else {
          list.innerHTML = '<li class="hero__item">Nothing found</li>';
        }
      })
      .catch(err => {
        console.error(err);
        totalPages = 1;
        currentPageUI = 1;
        renderPagination();
        list.innerHTML = '<li class="hero__item">Nothing found</li>';
      });
  }

  paginationNav.addEventListener('click', e => {
    const btn = e.target.closest('button.page');
    if (!btn || btn.disabled) return;

    const pageUI = Number(btn.dataset.page);
    if (!pageUI) return;

    currentPageUI = pageUI;
    loadEvents();
  });

  if (searchBtn) {
    searchBtn.addEventListener(
      'click',
      e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        currentPageUI = 1;
        loadEvents();
      },
      true
    );
  }

  if (searchInput) {
    searchInput.addEventListener(
      'input',
      e => {
        e.stopImmediatePropagation();
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          currentPageUI = 1;
          loadEvents();
        }, 350);
      },
      true
    );
  }

  if (countrySelect) {
    countrySelect.addEventListener(
      'change',
      e => {
        e.stopImmediatePropagation();
        currentPageUI = 1;
        loadEvents();
      },
      true
    );
  }

  renderPagination();
  loadEvents();
}
