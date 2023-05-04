'use strict';

//first section

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// second section

const hamburgerMenu = document.querySelector('.hamburger');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

//Slider
// const carousel = document.querySelector('.carousel');
// const filmstrip = carousel.querySelector('.filmstrip');
// const prevBtn = carousel.querySelector('.prev');
// const nextBtn = carousel.querySelector('.next');

// let currentPosition = 0;

// prevBtn.addEventListener('click', () => {
//   currentPosition += 220;
//   if (currentPosition > 0) {
//     currentPosition = -1000;
//   }
//   filmstrip.style.transform = `translateX(${currentPosition}px)`;
// });

// nextBtn.addEventListener('click', () => {
//   currentPosition -= 220;
//   if (currentPosition < -1000) {
//     currentPosition = 0;
//   }
//   filmstrip.style.transform = `translateX(${currentPosition}px)`;
// });
