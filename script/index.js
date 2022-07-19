// объявление переменных для закрытия баннера

const banner = document.querySelector(".banner");
const buttonCloseBanner = document.querySelector(".banner__close-button");

// функция закрытия баннера

function closeBanner() {
  banner.classList.add("banner_closed");
}

buttonCloseBanner.addEventListener("click", closeBanner);

// объявление переменных для скролла по кнопкам

const buttonScrollLeft = document.querySelector(".info-list__button-left");
const buttonScrollRight = document.querySelector(".info-list__button-right");
const scrollingSection = document.querySelector(".info-list__cards");

// функция скролла по кнопкам

function scrollToRight() {
  scrollingSection.scrollBy(348, 0);
}

function scrollToleft() {
  scrollingSection.scrollBy(-348, 0);
}

buttonScrollRight.addEventListener("click", scrollToRight);
buttonScrollLeft.addEventListener("click", scrollToleft);

// делаем правую/левую кнопку активной/неактивной

scrollingSection.addEventListener("scroll", () => {
  const posX = scrollingSection.scrollLeft;

  if (posX >= 1) {
    buttonScrollLeft.classList.add("info-list__button-left_active");
  } else {
    buttonScrollLeft.classList.remove("info-list__button-left_active");
  }

  if (posX >= 1120) {
    buttonScrollRight.classList.add("info-list__button-right_disabled");
  } else if (posX < 1120) {
    buttonScrollRight.classList.remove("info-list__button-right_disabled");
  }
});
