// ! Elements
const nav = document.querySelector('.pagination');
const countrySelect = document.querySelector('.header__input');

// ! Is active page
if (nav) {
  nav.addEventListener('click', event => {
    const btn = event.target.closest('button.page');
    if (!btn) {
      return;
    }
    nav.querySelectorAll('button.page.is-active').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  });
}

// ! Pagination

// ? Server

// function pagination(page) {
//   const countryCode = countrySelect.value;

//   let url =
//     `https://app.ticketmaster.com/discovery/v2/events.json` +
//     `?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl` +
//     `&page=${page}` +
//     `&size=10`;

//   if (countryCode !== "") {
//     url += `&countryCode=${encodeURIComponent(countryCode)}`;
//   }

//   return fetch(url).then((res) => res.json());
// }

// pagination(1).then((data) => console.log(data));


// ? Rewrite numbers of the site

