import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const gallery = document.querySelector('.gallery');


const makeGallery = galleryItems.map(({ preview, original, description}) => {
    return `<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`}).join(" ");


gallery.insertAdjacentHTML("beforeend", makeGallery);

// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
    gallery.addEventListener('click', openModal)

// Реализация делегирования на div.gallery и получение url большого изображения.

function openModal(event) {
    // запрет перехода по ссылке
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const bigImg = event.target.dataset.source;
    // Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
    const instance = basicLightbox.create(`<img src="${bigImg}">`);

    instance.show();
    window.addEventListener('keydown', onEscPress);
    

    // Закрытие по escape

    function closeModal() {
        window.removeEventListener('keydown', onEscPress);
    
        instance.close();
    }

    function onEscPress(event) {
        if (event.code === 'Escape') {
            closeModal();
        
        }
    
    }
}
  // Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
    // в html 
