'use strict';


export default function timer(daedline) {
  const startTimer = setInterval(displayTime, 1000);
  displayTime();

  function displayTime() {
    const milSeconds = new Date(daedline) - new Date();

    if (milSeconds < 0) {
      stopTimer();
    } else {
      const days = Math.floor(milSeconds / (24 * 3600 * 1000));
      const hours = Math.floor((milSeconds / (3600 * 1000)) % 24);
      const minutes = Math.floor((milSeconds / 1000 / 60) % 60);
      const seconds = Math.floor((milSeconds / 1000) % 60);

      const daysDisplay = document.querySelector('#days');
      const hoursDisplay = document.querySelector('#hours');
      const minutesDisplay = document.querySelector('#minutes');
      const secondsDisplay = document.querySelector('#seconds');

      daysDisplay.textContent = days > 9 ? days : '0' + days;
      hoursDisplay.textContent = hours > 9 ? hours : '0' + hours;
      minutesDisplay.textContent = minutes > 9 ? minutes : '0' + minutes;
      secondsDisplay.textContent = seconds > 9 ? seconds : '0' + seconds;
    }
  }

  function stopTimer() {
    clearInterval(startTimer);
  }
}
