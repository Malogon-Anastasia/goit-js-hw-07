import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(createImgMarkup(galleryItems));

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);


function createImgMarkup(galleryItems) {
return galleryItems
.map(({ preview, original, description }) => {
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

function onGalleryContainerClick(evt) {
      evt.preventDefault();
      
      if (evt.target.nodeName !== 'IMG') {
        return;
      }

  const modalOption = {
    onShow: instance => {
      document.addEventListener('keydown', escapeBtn);
    },

    onClose: instance => {
      document.removeEventListener('keydown', escapeBtn);
    },
    closable: false
  };
    
const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`, modalOption);
instance.show();

instance.element().addEventListener('click', onLightboxClick);

function onLightboxClick(evt) {
  if (evt.target.nodeName === 'IMG') {
    return;
  }

  instance.close();
}


function escapeBtn(evt) {
    if (evt.keyCode == 27) {
        instance.close();
    }
  }
}