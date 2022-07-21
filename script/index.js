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

// Event listeners
buttonCloseBanner.addEventListener("click", closeBanner);
scrollBgInfo.addEventListener("scroll", addRemoveButtonsBgInfo);
scrollMediaNews.addEventListener("scroll", addRemoveButtonsMediaNews);
