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

const galleryLi = document.querySelector('.gallery__link');
// запрет перехода по ссылке

function onBlock(event) {
    event.preventDefault();
}
galleryLi.addEventListener('click', onBlock);

// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.