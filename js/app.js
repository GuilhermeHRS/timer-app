const time = document.getElementById('timer');
const table = document.querySelector('#list');
const td = document.querySelector('td');

const appendSeconds = document.querySelector("#minutes");
const appendMilliSeconds = document.querySelector("#seconds");

const btnPlay = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnFlag = document.getElementById("flag");
const btnReset = document.getElementById("reset");

var interval;
var seconds = 00;
var milliSecs = 00;


btnPlay.addEventListener('click', e => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnPause.addEventListener('click', e => {
    clearInterval(interval);
    isPaused = true;
});

btnFlag.addEventListener('click', () => {

    let historyFlagTimer = document.getElementById('flag-timer');
    let historyID = document.getElementById('flag-id');
    let historySum = document.getElementById('flag-sum');

    let numberRows = table.rows.length;
    let row = table.insertRow(numberRows);

    historyID = row.insertCell(0);
    historyID.textContent = numberRows;

    historyFlagTimer = row.insertCell(1);
    historyFlagTimer.textContent = seconds + ':' + milliSecs;

    historySum = row.insertCell(2);
    historySum.textContent = seconds - seconds + ':' + milliSecs - milliSecs;

    console.log(table.removeChild('tr'))
});

btnReset.addEventListener('click', e => {
    clearInterval(interval);
    seconds = "00";
    milliSecs = "00";

    appendSeconds.innerHTML = seconds;
    appendMilliSeconds.innerHTML = milliSecs;

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

});

const startTimer = () => {
    milliSecs++;

    if (milliSecs <= 9) {
        appendMilliSeconds.innerHTML = "0" + milliSecs;
    }

    if (milliSecs > 9) {
        appendMilliSeconds.innerHTML = milliSecs;
    }

    if (milliSecs > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milliSecs = 0;
        appendMilliSeconds.innerHTML = "0" + 0;
    }

    if (milliSecs > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
