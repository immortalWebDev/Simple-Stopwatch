const timerDisplay = document.querySelector(".timerDisplay");
const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const snap = document.querySelector(".snap");
const snapsContainer = document.querySelector(".snaps");

let milisec = 0,
  sec = 0,
  min = 0;
let timerId = null;

start.addEventListener("click", () => {
  if (timerId !== null) {
    clearInterval(timerId);
  }

  timerId = setInterval(startTimer, 10);
});

stop.addEventListener("click", () => {
  clearInterval(timerId);
});

reset.addEventListener("click", () => {
  clearInterval(timerId);
  timerDisplay.innerText = `00:00:00`;
  milisec = sec = min = 0;
  snapsContainer.innerHTML = ''; 

});

function startTimer() {
  milisec++;
  if (milisec == 100) {
    milisec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }

  let milisecString = milisec < 10 ? `0${milisec}` : milisec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minString = min < 10 ? `0${min}` : min;

  timerDisplay.innerText = `${minString}:${secString}:${milisecString}`;
}
