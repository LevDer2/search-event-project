const headerBtn = document.querySelector(".header__btn");
const back = document.querySelector('.backdrop');
const closeEl = document.querySelector('.modal__btn');
headerBtn.addEventListener('click', () => {
    back.style.opacity = '1';
     back.style.pointerEvents = 'all';
});
