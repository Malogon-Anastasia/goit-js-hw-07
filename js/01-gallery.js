import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(createImgMarkup(galleryItems));
const galleryContainer = document.querySelector('.gallery');
// const galleryMarkup = createImgMarkup(galleryItems)

// galleryContainer.innerHTML(`beforeend`, galleryMarkup);

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
galleryContainer.innerHTML = createImgMarkup(galleryItems);

