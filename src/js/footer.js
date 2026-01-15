const paginationNav = document.querySelector('.pagination');
const list = document.querySelector('.hero__list');
const searchInput = document.querySelector('.header__inp');
const searchBtn = document.querySelector('.header__btn');
const countrySelect = document.querySelector('.header__input');

if (paginationNav && list) {
  const PAGE_SIZE = 30;
  const visibleCount = 5;
  let currentPageUI = 1;
  let totalPages = 1;
  let debounceTimer = null;

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
    const date = event.dates?.start?.localDate || 'Unknown date';
    const place = truncateText(
      event._embedded?.venues?.[0]?.name || 'Unknown',
      15
    );
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
    const keyword = searchInput?.value.trim() || '';
    const country = countrySelect?.value || '';
    const apiPage = currentPageUI - 1;
    let query = `&size=${PAGE_SIZE}&page=${apiPage}`;
    if (keyword) query += '&keyword=' + encodeURIComponent(keyword);
    if (country) query += '&countryCode=' + country;
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
    for (let p = start; p <= end; p++) {
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

  async function loadEvents() {
    list.innerHTML = '<p class="hero__desk deskbox">Loading...</p>';
    const apiKey = 'rvylvsHWc98giycRfhDFKtIp8G9FNDPl';
    const query = buildQuery();
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}${query}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      totalPages = data.page?.totalPages
        ? Math.min(Math.floor(999 / PAGE_SIZE) + 1, data.page.totalPages)
        : 1;
      if (currentPageUI > totalPages) currentPageUI = totalPages;
      renderPagination();

      const events = data._embedded?.events || [];
      if (events.length > 0) renderEvents(events);
      else list.innerHTML = '<p class="hero__desk deskbox">Nothing found</p>';
    } catch (err) {
      console.error(err);
      totalPages = 1;
      currentPageUI = 1;
      renderPagination();
      list.innerHTML = '<p class="hero__desk deskbox">Nothing found</p>';
    }
  }

  paginationNav.addEventListener('click', e => {
    const btn = e.target.closest('button.page');
    if (!btn || btn.disabled) return;
    const pageUI = Number(btn.dataset.page);
    if (!pageUI) return;
    currentPageUI = pageUI;
    loadEvents();
  });

  if (searchBtn)
    searchBtn.addEventListener('click', e => {
      e.preventDefault();
      currentPageUI = 1;
      loadEvents();
    });
  if (searchInput)
    searchInput.addEventListener('input', e => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentPageUI = 1;
        loadEvents();
      }, 350);
    });
  if (countrySelect)
    countrySelect.addEventListener('change', e => {
      currentPageUI = 1;
      loadEvents();
    });

  renderPagination();
  loadEvents();
}

