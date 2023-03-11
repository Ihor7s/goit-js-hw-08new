
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const imageMarkup = createImagesCardsMarkup(galleryItems);


function createImagesCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" 
            href='${original}' >
                <img 
                class="gallery__image" 
                src='${preview}'
                alt='${description}' />
            </a>`;
    }).join('');
}

gallery.insertAdjacentHTML('beforeend', imageMarkup);


new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
captionDelay: '250',
});