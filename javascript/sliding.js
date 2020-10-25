let slideNumber = 0;
let numberOfItems = null;
let multiplier = null;
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('#slider');

window.addEventListener('load', () => {
    //Set the number of children in the slider container and interval of shifts
    numberOfItems = document.querySelectorAll('.item').length;
    multiplier = 100 / numberOfItems;

    //Set width of slider to hold the number of items/children
    const slideWidthPercentage = numberOfItems * 100;
    slider.style.width = `${slideWidthPercentage}%`
})

function slideGallery(e) {
    const direction = e.target.id;
    if(direction === 'right') {
        if (slideNumber + 1 < numberOfItems) {
            slideNumber++;
        }
    } else {
        if (slideNumber - 1 >= 0) {
            slideNumber--;
        }
    }

    slider.style.transform = `translate(-${slideNumber*multiplier}%)`;
    return;
}

right.addEventListener('click', slideGallery);
left.addEventListener('click', slideGallery);