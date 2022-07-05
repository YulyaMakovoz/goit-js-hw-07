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

console.log()
// запрет перехода по ссылке

// const galleryLi = document.querySelector('.gallery__link');

// function onBlock(event) {
//     event.preventDefault();
// }
// galleryLi.addEventListener('click', onBlock);

// Реализация делегирования на div.gallery и получение url большого изображения.
function openModal(event) {
    event.preventDefault();
if (!event.target.classList.contains('gallery__image')) {
    return;
}
    const bigImg = event.target.dataset.source;
    const instans = basicLightbox.create(`<img src="${bigImg}">`)

    instans.show();
    // console.log(bigImg);
}
gallery.addEventListener('click', openModal)

// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

// const winModal = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" width="800" height="600">
// `)

// winModal.show()
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.