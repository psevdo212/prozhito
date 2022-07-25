// переменные для закрытия баннера
const banner = document.querySelector(".banner");
const buttonCloseBanner = document.querySelector(".banner__close-button");

// переменные для скролла по кнопкам
const scrollBgInfo = document.querySelector("#bgInfo");
const bgInfoButtonLeft = document.querySelector("#bgInfoButtonLeft");
const bgInfoButtonRight = document.querySelector("#bgInfoButtonRight");
const scrollMediaNews = document.querySelector("#mediaNews");
const mediaButtonLeft = document.querySelector("#mediaButtonLeft");
const mediaButtonRight = document.querySelector("#mediaButtonRight");

// переменные для скролла diary
const scrollDiary = document.querySelector(".cards");
const firstImage = document.querySelector("#firstImage");
const secondImage = document.querySelector("#secondImage");
const thirdImage = document.querySelector("#thirdImage");

// функция закрытия баннера
function closeBanner() {
  banner.classList.add("banner_closed");
}

// функция скролла по кнопкам
bgInfoButtonRight.addEventListener("click", () => {
  scrollBgInfo.scrollBy(348, 0);
});

bgInfoButtonLeft.addEventListener("click", () => {
  scrollBgInfo.scrollBy(-348, 0);
});

mediaButtonRight.addEventListener("click", () => {
  scrollMediaNews.scrollBy(348, 0);
});

mediaButtonLeft.addEventListener("click", () => {
  scrollMediaNews.scrollBy(-348, 0);
});

// функция активации/деактивации для секции "Новости и события"
function addRemoveButtonsBgInfo() {
  const posXbgInfo = scrollBgInfo.scrollLeft;

  if (posXbgInfo >= 1) {
    bgInfoButtonLeft.classList.add("info-list__button-left_active");
  } else {
    bgInfoButtonLeft.classList.remove("info-list__button-left_active");
  }

  if (posXbgInfo >= 1120) {
    bgInfoButtonRight.classList.add("info-list__button-right_disabled");
  } else if (posXbgInfo < 1120) {
    bgInfoButtonRight.classList.remove("info-list__button-right_disabled");
  }
}

// функция активации/деактивации для секции "Журнал "Прожито""
function addRemoveButtonsMediaNews() {
  const posXMediaNews = scrollMediaNews.scrollLeft;

  if (posXMediaNews >= 1) {
    mediaButtonLeft.classList.add("info-list__button-left_active");
  } else {
    mediaButtonLeft.classList.remove("info-list__button-left_active");
  }

  if (posXMediaNews >= 1120) {
    mediaButtonRight.classList.add("info-list__button-right_disabled");
  } else if (posXMediaNews < 1120) {
    mediaButtonRight.classList.remove("info-list__button-right_disabled");
  }
}

// функция скролла карточек diary
firstImage.addEventListener("click", () => {
  scrollDiary.scrollTo(0, 0);
  firstImage.classList.add("diary__button-scroll-active");
  secondImage.classList.remove("diary__button-scroll-active");
  thirdImage.classList.remove("diary__button-scroll-active");
});

secondImage.addEventListener("click", () => {
  scrollDiary.scrollTo(300, 0);
  firstImage.classList.remove("diary__button-scroll-active");
  secondImage.classList.add("diary__button-scroll-active");
  thirdImage.classList.remove("diary__button-scroll-active");
});

thirdImage.addEventListener("click", () => {
  scrollDiary.scrollTo(600, 0);
  firstImage.classList.remove("diary__button-scroll-active");
  secondImage.classList.remove("diary__button-scroll-active");
  thirdImage.classList.add("diary__button-scroll-active");
});

// Event listeners
buttonCloseBanner.addEventListener("click", closeBanner);
scrollBgInfo.addEventListener("scroll", addRemoveButtonsBgInfo);
scrollMediaNews.addEventListener("scroll", addRemoveButtonsMediaNews);
