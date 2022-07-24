// переменные для открытия/закрытия popup-menu

const buttonPopupMenu = document.querySelector(".header__button-menu");
const buttonClosePopupMenu = document.querySelector(
  ".popup-menu__button-close"
);
const popupMenu = document.querySelector(".popup-menu");

// функция открытия/закрытия popup-menu

function openPopupMenu() {
  popupMenu.classList.add("popup-menu_opened");
}

function ClosePopupMenu() {
  popupMenu.classList.remove("popup-menu_opened");
}

function someFunc() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 640) {
    popupMenu.classList.remove("popup-menu_opened");
  }
}

// Event listeners
buttonPopupMenu.addEventListener("click", openPopupMenu);
buttonClosePopupMenu.addEventListener("click", ClosePopupMenu);
window.addEventListener("resize", someFunc);
