const navControls = document.querySelectorAll('.nav-bar-control');
const navList = document.querySelector('.nav-list');
const mask = document.querySelector('.mask');

function toggleNavActive() {
    navList.classList.toggle('nav-active');
    mask.classList.toggle('mask-active');
}

navControls.forEach(control => {
    control.addEventListener('click', toggleNavActive);
});

mask.addEventListener('click', toggleNavActive);
