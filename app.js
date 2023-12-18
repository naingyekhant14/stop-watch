const stopWatch = document.getElementsByClassName("stop-watch")[0];
const startButton = document.getElementsByClassName("start-button")[0];
const pauseButton = document.getElementsByClassName("pause-button")[0];
const continueButton = document.getElementsByClassName("continue-button")[0];
const restartButton = document.getElementsByClassName("restart-button")[0];
let hour = 0,
  minute = 0,
  second = 0;
miliSecond = 0;
const startTime = () => {
  second += 1;

  if (second === 60) {
    second = 0;
    minute += 1;
  }
  if (minute === 60) {
    minute = 0;
    hour += 1;
  }
  // miliSecondText = miliSecond < 10 ? "0" + miliSecond.toString() : miliSecond;
  secondText = second < 10 ? "0" + second.toString() : second;
  minuteText = minute < 10 ? "0" + minute.toString() : minute;
  hourText = hour < 10 ? "0" + hour.toString() : hour;
  stopWatch.textContent = hourText + ":" + minuteText + ":" + secondText;
};

let intervalId;
startButton.addEventListener("click", () => {
  intervalId = setInterval(startTime, 1000);
});
pauseButton.addEventListener("click", () => {
  clearInterval(intervalId);
});
continueButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1000);
});
restartButton.addEventListener("click", () => {
  clearInterval(intervalId);
  (hour = 0), (minute = 0), (second = 0);
  intervalId = setInterval(startTime, 1000);
});
