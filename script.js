// Mobile Menu Starts Here
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

// Email Validation
document.querySelector('.submit').addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'Error: email should be in lowercase!';
    // hide error 5 seconds time so it can show up if the there is another error when click again
    setTimeout(() => {
      error.innerHTML = '';
    }, 5000);
  }
});
