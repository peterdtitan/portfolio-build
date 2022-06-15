const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');
const navItem = document.querySelector('.nav-item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  logo.classList.toggle('active');
  navItem.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  logo.classList.remove('active');
}));