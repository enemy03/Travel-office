//Sekcja baner 
let activeElement = 0;
const paragraph = document.querySelector('.wrap p');
const h1 = document.querySelector('.wrap h1');
const header = document.querySelector('header');

const Images = ['img/alps-mountains_800.jpg', 'img/himalaje-mountains_800.jpg', 'img/tatry-mountains_800.jpg'];
let Descriptions = ['lakes, mountains and culture', 'over 4000 metres', 'beatiful views'];
let Headings = ['Bavarian Alps', 'Himalayas Mountains', 'Tatra Mountains'];

function ChangeElement() {
    activeElement++;
    if (activeElement == 3) {
        activeElement = 0;
    }
    header.style.backgroundImage = "url('" + Images[activeElement] + "')";
    h1.textContent = Headings[activeElement];
    paragraph.textContent = Descriptions[activeElement];
}

setInterval(ChangeElement, 4000)

//Media Query

const mediaQuery = window.matchMedia('(min-width: 768px)');
const Images_768 = ['img/alps-mountains_1600.jpg', 'img/himalaje-mountains_1600.jpg', 'img/tatry-mountains_1600.jpg'];
let Descriptions_768 = ['lakes, mountains and culture', 'over 4000 metres', 'beatiful views'];
let Headings_768 = ['Bavarian Alps', 'Himalayas Mountains', 'Tatra Mountains'];


function ChangeElements() {
    activeElement++;
    if (activeElement == 3) {
        activeElement = 0;
    }
    header.style.backgroundImage = "url('" + Images_768[activeElement] + "')";
    h1.textContent = Headings_768[activeElement];
    paragraph.textContent = Descriptions_768[activeElement];

}


if (mediaQuery.matches) {
    setInterval(ChangeElements, 4000)
}




//Sekcja menu burger
const IconStart = document.querySelector('.fa-bars');
const Aside = document.querySelector('.menu');
const IconEnd = document.querySelector('.close');
IconStart.addEventListener('click', function () {
    Aside.classList.add('active')
})

IconEnd.addEventListener('click', function () {
    Aside.classList.remove('active')
})


// Sekcja articles 

const Art_1 = document.querySelector('.art_1 div');
const Art_2 = document.querySelector('.art_2 div');
const Art_3 = document.querySelector('.art_3 div');
const Art_1Of = Art_1.offsetTop;
const Art_2Of = Art_2.offsetTop;
const Art_3Of = Art_3.offsetTop;
const Art_1H = Art_1.clientHeight;
const Art_2H = Art_2.clientHeight;
const Art_3H = Art_3.clientHeight;

document.addEventListener('scroll', function () {
    const SizeOnTop = window.scrollY;


    if (SizeOnTop > Art_1Of + Art_1H - window.outerHeight) {
        Art_1.classList.add('active')
    }

    if (SizeOnTop > Art_2Of + Art_2H - window.outerHeight) {
        Art_2.classList.add('active')
    }

    if (SizeOnTop > Art_3Of + Art_3H - window.outerHeight) {
        Art_3.classList.add('active')
    }

})