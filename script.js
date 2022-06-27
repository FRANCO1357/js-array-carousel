// RECUPERO LE IMMAGINI DAL DOM
const images = document.querySelectorAll('.gallery img')

// SELEZIONO L'IMMAGINE A CUI VOGLIO ASSEGNARE LA CLASSE ACTIVE 
let currentActiveIndex = 0;

// AGGIUNGO LA CLASSE ACTIVE ALL'IMMAGINE CHE VOGLIO VEDERE QUANDO AGGIORNO
images[currentActiveIndex].classList.add('active');

// RECUPERARE I BOTTONI
const prevButton = document.getElementsByClassName('prev');
const nextButton = document.getElementsByClassName('next');

// LOGICA BUTTON NEXT

nextButton.addEventListener('click', function(){
    currentActiveIndex++ ;
})