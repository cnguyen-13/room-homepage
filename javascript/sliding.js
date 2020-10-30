let slideNumber = 0;
let numberOfItems = null;
let slideInterval = null;
const left = document.querySelector('#slide-show-next-btn');
const right = document.querySelector('#slide-show-prev-btn');
const slideShows = document.querySelectorAll('.slide-show');

function setWidthAndInterval() {
    //Set the number of children in the slider container and interval of shifts
    numberOfItems = document.querySelectorAll('.slide-show-item').length;
    slideInterval = 100 / numberOfItems;
    
    //Set width of slider to hold the number of items/children
    const slideWidthPercentage = numberOfItems * 100;
    slideShows.forEach(show => {
        show.style.width = `${slideWidthPercentage}%`;
    })
    return;
}

function moveSlideShow(e) {
    //Function slides to the next/previous image
    const btn = e.target.id;
    if(btn === 'slide-show-next-btn') {
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
    slideShows.forEach(show => {
        show.style.transform = `translate(-${slideNumber*slideInterval}%)`;
    })
    return;
}


//Event Listeners
window.addEventListener('load', setWidthAndInterval);
right.addEventListener('click', moveSlideShow);
left.addEventListener('click', moveSlideShow);
