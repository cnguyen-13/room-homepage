const navButtons = document.querySelectorAll('.nav-bar-control');
const navLinks = document.querySelector('.nav-list');
const mask = document.querySelector('.mask');

function toggleNavActive() {
    navLinks.classList.toggle('nav-active');
    mask.classList.toggle('mask-active');
}

navButtons.forEach((button) => {
    button.addEventListener('click', toggleNavActive);
});

mask.addEventListener('click', toggleNavActive);
