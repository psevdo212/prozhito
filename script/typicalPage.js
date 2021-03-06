// переменные для закрытия sidebanner
const sidebanner = document.querySelector(".sidebanner");
const buttonCloseSidebanner = document.querySelector(
  ".sidebanner__close-button"
);

// переменные открытия/закрытия popup-structure
const popupStructure = document.querySelector(".popup-structure");
const buttonOpenpopupStructure = document.querySelector(".structure__button");
const buttonClosePopupStrcuture = document.querySelector(
  ".popup-structure__close-button"
);

// переменные для слайдера фотографий
const galleryButtonLeft = document.querySelector(".gallery__button-left");
const galleryButtonRight = document.querySelector(".gallery__button-right");
const scrollGallery = document.querySelector("#scrollGallery");
const counterGallery = document.querySelector("#counterGallery");
const figcaptionGallery = document.querySelector("#figcaptionGallery");

// функция закрытия popup-structure
function buttonClosePopupStructure() {
  popupStructure.classList.remove("popup-structure_opened");
}

// функция закрытия баннера
function closeSidebanner() {
  sidebanner.classList.add("sidebanner_closed");
}

// функция открытия popup-structure
function openPopupStructure() {
  popupStructure.classList.add("popup-structure_opened");
}

// функция скролла галереи по кнопкам
galleryButtonRight.addEventListener("click", () => {
  scrollGallery.scrollBy(740, 0);
});

galleryButtonLeft.addEventListener("click", () => {
  scrollGallery.scrollBy(-740, 0);
});

// функция счетчика слайдов
function countImages() {
  const posXGallery = scrollGallery.scrollLeft;

  if (posXGallery <= 700) {
    counterGallery.textContent = "1 / 4";
    galleryButtonLeft.style.display = "none";
  } else if (posXGallery >= 700 && posXGallery <= 1440) {
    counterGallery.textContent = "2 / 4";
    galleryButtonLeft.style.display = "block";
  } else if (posXGallery >= 1440 && posXGallery <= 2180) {
    counterGallery.textContent = "3 / 4";
    galleryButtonRight.style.display = "block";
  } else if (posXGallery >= 2180 && posXGallery <= 2760) {
    counterGallery.textContent = "4 / 4";
    galleryButtonRight.style.display = "none";
  }
}

// Event listeners
buttonOpenpopupStructure.addEventListener("click", openPopupStructure);
buttonClosePopupStrcuture.addEventListener("click", buttonClosePopupStructure);
buttonCloseSidebanner.addEventListener("click", closeSidebanner);
scrollGallery.addEventListener("scroll", countImages);
