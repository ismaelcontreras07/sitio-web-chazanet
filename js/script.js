
// js/script.js

document.addEventListener('DOMContentLoaded', () => {

  // 2) Burger toggle
  const nav    = document.querySelector('#nav');
  const burger = document.querySelector('#burger');
  if (nav && burger) {
    burger.addEventListener('change', () => {
      nav.classList.toggle('visible', burger.checked);
    });
  }
});