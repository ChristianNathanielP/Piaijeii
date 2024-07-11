// Hamburger Menu

// const hamburger = document.querySelector('#hamburger');
// const navmenu = document.querySelector('#navMenu');

// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('hamburger-active');
//     navmenu.classList.toggle('hidden');
// });

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
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
        'CapCut',
        'ChatGPT',
        'Prime Video',
        'Vidio',
        'Viu',
        'Spotify',
        'Youtube',
        'Disney+', 
        'WeTV',
        'BStation',
        'IQIYI',
        'HBO GO',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 500,
    backDelay: 500,
    loop: true,
    smartBackspace: true,
});


