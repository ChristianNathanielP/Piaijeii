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

// Type.JS
var typingEffect = new Typed(".multitext", {
    strings : [
        'Canva',
        'Prime Video',
        'Vidio',
        'Viu',
        'Youtube',
        'Disney+', 
        'WeTV'
    ],
    typeSpeed: 50,
    backSpeed: 100,
    startDelay: 500,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
});


