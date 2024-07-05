// Hamburger Menu

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('toTop');

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
};

