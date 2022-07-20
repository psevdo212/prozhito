// объявление переменных для закрытия sidebanner
const sidebanner = document.querySelector(".sidebanner");
const buttonCloseSidebanner = document.querySelector(".sidebanner__close-button");

// объявление переменных открытия/закрытия popup-structure
const popupStructure = document.querySelector(".popup-structure");
const buttonOpenpopupStructure = document.querySelector(".structure__button");
const buttonClosePopupStrcuture = document.querySelector(".popup-structure__close-button");

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
// Event listeners
buttonOpenpopupStructure.addEventListener("click", openPopupStructure);
buttonClosePopupStrcuture.addEventListener("click", buttonClosePopupStructure);
buttonCloseSidebanner.addEventListener("click", closeSidebanner);
