// объявление переменных для закрытия баннера

const banner = document.querySelector(".banner");
const buttonCloseBanner = document.querySelector(".banner__close-button");

// функция закрытия баннера

function closeBanner () {
  banner.classList.add("banner_closed")
}

buttonCloseBanner.addEventListener("click", closeBanner)
