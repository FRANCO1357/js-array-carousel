// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.

// RECUPERO LA GALLERY
const gallery = document.getElementById("gallery")

// RECUPERO LA LISTA DI IMMAGINI
const imageList = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

// CREO LA VARIABILE DI APPOGGIO
let imgNumber = 0;

// CICLO FOR PER CREARE LE IMMAGINI
for (i = 0; i < imageList.length; i++){

    // CREO L'ELEMENTO IMMAHINE
    let images = `<img src="${imageList[i]}">`;

    // STAMPO UN IMMAGINE DIVERSA AD OGNI CICLO
    gallery.innerHTML += images;
}

// AGGIUNGO LA CLASSE ACTIVE ALL'IMMAGINE CORRENTE
document.querySelectorAll('img')[imgNumber].classList.add('active');