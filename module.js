'use strict';

// Select Elements
const nav = document.querySelector('.nav');
const btnMobile = document.querySelector('.btn-mobile');
const btnClose = document.querySelector('.btn-close');
const mobileMenu = document.querySelector('.menu');

nav.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('hidden');
    document.querySelector('.menu-overlay').classList.toggle('hidden');
});