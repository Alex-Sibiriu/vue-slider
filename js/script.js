/***************
    ELEMENTS
****************/
const myMainCarousel = document.querySelector('.my-carousel-images');
const myThumbnailsCarousel = document.querySelector('.my-thumbnails');
const myPrev = document.querySelector('.my-previous');
const myNext = document.querySelector('.my-next');
const myPrevAuto = document.querySelector('.my-prev-auto ');
const myStopAuto = document.querySelector('.my-stop-auto ');
const myNextAuto = document.querySelector('.my-next-auto ');
let autoplay = setInterval(clickNext, 3000);
let counter = 0;

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// Popoliamo il carosello principale
images.forEach(image => {
    myMainCarousel.innerHTML += `
    <div class="my-carousel-item">
    <img class="img-fluid" src=${image.url} alt="${image.title} picture">
    <div class="item-description px-3">
    <h2>${image.title}</h2>
    <p>${image.description}</p>
    </div>
    </div>
    `
})

const mainCarouselImages = document.querySelectorAll('.my-carousel-item');
mainCarouselImages[0].classList.add('active');

// Popoliamo il carosello delle thumbnails
images.forEach(image => {
    myThumbnailsCarousel.innerHTML += `
    <div class="my-thumbnail">
        <img class="img-fluid" src=${image.url} alt="Thumbnail of ${image.title} picture">
    </div>
    `
})

const myThumbnails = document.querySelectorAll('.my-thumbnail');
myThumbnails[0].classList.add('active');

/***************
    EVENTS
****************/
myNext.addEventListener('click', () => {
    clickNext();
    clearInterval(autoplay);
})

myPrev.addEventListener('click', () => {
    clickPrev()
    clearInterval(autoplay);
})

myThumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        activeToggle();
        counter = index;
        activeToggle();
        clearInterval(autoplay);
    })
})

myPrevAuto.addEventListener('click', () => {
    clearInterval(autoplay);
    autoplay = setInterval(clickPrev, 3000);
})

myNextAuto.addEventListener('click', () => {
    clearInterval(autoplay);
    autoplay = setInterval(clickNext, 3000);
})

myStopAuto.addEventListener('click', () => {
    clearInterval(autoplay);
})

/***************
    FUNCTIONS
****************/
function clickNext() {
    activeToggle();
    counter++;
    if (counter === images.length) {
        counter = 0;
    }
    activeToggle()
}

function clickPrev() {
    activeToggle();
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
    }
    activeToggle()
}

function activeToggle() {
    mainCarouselImages[counter].classList.toggle('active');
    myThumbnails[counter].classList.toggle('active');
}