import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);


function createImgMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
})
.join('');  
}


let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    lightbox.open('.gallery');
};