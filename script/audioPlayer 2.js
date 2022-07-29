/** Implementation of the presentation of the audio player */

const playIconContainer = document.querySelector(".audioplayer__play");
const muteIconContainer = document.querySelector(".audioplayer__mute");
const audio = document.querySelector("audio");
const durationContainer = document.querySelector(".audioplayer__time");
let playState = "play";
let muteState = "unmute";

playIconContainer.addEventListener("click", () => {
  if (playState === "play") {
    audio.play();
    playState = "pause";
  } else {
    audio.pause();
    playState = "play";
  }
});

muteIconContainer.addEventListener("click", () => {
  if (muteState === "unmute") {
    audio.muted = true;
    muteState = "mute";
  } else {
    audio.muted = false;
    muteState = "unmute";
  }
});

/** Implementation of the functionality of the audio player */

const calculateTime = (secs) => {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedMinutes = minutes >= 60 ? `${minutes - 60}` : `${minutes}`;
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${hours}:${returnedMinutes}:${returnedSeconds}`;
};

const displayDuration = () => {
  durationContainer.textContent = calculateTime(audio.duration);
};

if (audio.readyState > 0) {
  displayDuration();
} else {
  audio.addEventListener("loadedmetadata", () => {
    displayDuration();
  });
}
