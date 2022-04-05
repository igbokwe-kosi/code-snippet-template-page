'use strict';

const nav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.btn--menu');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('hide');

  if (!nav.classList.contains('hide')) {
    nav.scrollIntoView({ behavior: 'smooth' });
  }
});
