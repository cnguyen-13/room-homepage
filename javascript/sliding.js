const prevBtn = document.querySelector('#slide-show-prev-btn');
const nextBtn = document.querySelector('#slide-show-next-btn');
const slideShows = document.querySelectorAll('.slide-show');
const textContents = document.querySelectorAll('.main-text-content');
let slideNumber = 0;
let numberOfItems = null;
let slideInterval = null;

function setWidthAndInterval() {
    //Set the number of children in the slider container and interval of shifts
    numberOfItems = document.querySelectorAll('.slide-show-item').length;
    slideInterval = 100 / numberOfItems;

    //Set width of slider to hold the number of items/children
    const slideWidthPercentage = numberOfItems * 100;
    slideShows.forEach((show) => {
        show.style.width = `${slideWidthPercentage}%`;
    });
}

function heroChange(btn) {
    if (btn === 'slide-show-next-btn') {
        //Prevents overflow
        if (slideNumber + 1 < numberOfItems) {
            slideNumber++;
        }
    } else {
        //Prevents underflow
        if (slideNumber - 1 >= 0) {
            slideNumber--;
        }
    }

    slideShows.forEach((show) => {
        show.style.transform = `translate(-${slideNumber * slideInterval}%)`;
    });
}

function textChange() {
    textContents.forEach((text, idx) => {
        if (idx === slideNumber) {
            text.classList.remove('disable');
            text.classList.add('active');
        } else {
            text.classList.add('disable');
            text.classList.remove('active');
        }
    });
}


function slide(e) {
    //Changes hero and text when sliding
    heroChange(e.target.id);
    textChange();
}

//Event Listeners
window.addEventListener('load', setWidthAndInterval);
prevBtn.addEventListener('click', slide);
nextBtn.addEventListener('click', slide);
