const time = document.getElementById('timer');

var interval;
var minutes = 00;
var seconds = 00;
var appendMinutes = document.querySelector("#minutes");
var appendSeconds = document.querySelector("#seconds");
var btnStart = document.getElementById("start");
var btnPause = document.getElementById("pause");
var btnFlag = document.getElementById("flag");
var btnReset = document.getElementById("reset");


btnStart.addEventListener('click', e => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnPause.addEventListener('click', e => {
    clearInterval(interval);
    isPaused = true;
});

btnReset.addEventListener('click', e => {
    clearInterval(interval);
    seconds = "00";
    minutes = "00";

    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;

    historyFlagTimer.textContent = "";

});

function startTimer() {
    seconds++;

    if (seconds <= 9) {
        appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 99) {
        console.log("seconds");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendMinutes.innerHTML = minutes;
    }
}


btnFlag.addEventListener('click', () => {
    let flagID = document.getElementById('flag-id')
    let historyFlag = document.getElementById('flag-sum');
    let historyFlagTimer = document.getElementById('flag-timer');
    const rows = document.querySelectorAll('td');


    historyFlagTimer.textContent = minutes + ':' + seconds;

});



