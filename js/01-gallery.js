import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
galleryRef.addEventListener("click", onImgClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, descrption }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${descrption}"
      />
    </a>
  </div>`;
    })
    .join("");
}

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src='${event.target.dataset.source}' width='800' height='600'>`
  );
  instance.show();

  galleryRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      {
        instance.close();
      }
    }
  });
}
