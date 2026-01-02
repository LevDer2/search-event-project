const back = document.querySelector('.backdrop');
const closeEl = document.querySelector('.modal__btn');

    closeEl.addEventListener('click', () => {
        back.style.opacity = '0';
       back.style.pointerEvents = 'none';
    });