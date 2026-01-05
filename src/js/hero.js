// ! ELEMENTS
const back = document.querySelector('.backdrop');
const closeEl = document.querySelector('.modal__btn');
const sectionHero = document.querySelector('.hero');

// ! Open Modal
sectionHero.addEventListener('click', event => {
  const card = event.target.closest('.card');
  if (!card) return;
  else {
    back.style.opacity = '1';
    back.style.pointerEvents = 'all';
  }
});
