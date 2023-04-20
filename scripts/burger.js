'use strict'

export function burgerMenuLogic() {
    const burgerBtn = document.getElementById('burger-btn');
    const mainNav = document.getElementById('main-nav');

    let isVisible = false;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    burgerBtn.addEventListener('click', toggleMenu);

    function toggleMenu(event) {

        const body = document.body;

        if (isVisible) {

            if (event.target === document.getElementById('main-nav-list')) return;
            mainNav.removeEventListener('click', toggleMenu);
            body.style.overflow = '';
            body.style.paddingRight = 0;
        }

        else {
            mainNav.addEventListener('click', toggleMenu);
            body.style.overflow = 'hidden';
            body.style.paddingRight = scrollBarWidth + 'px';
        }

        isVisible = !isVisible;
        burgerBtn.classList.toggle('burger-btn-active');
        mainNav.classList.toggle('nav-active');
    }
}