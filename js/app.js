const time = document.getElementById('timer');
const table = document.querySelector('#list');
const td = document.querySelector('td');

const appendMinutes = document.querySelector("#minutes");
const appendSeconds = document.querySelector("#seconds");

const btnPlay = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnFlag = document.getElementById("flag");
const btnReset = document.getElementById("reset");

var interval;
var minutes = 00;
var seconds = 00;


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
    historyFlagTimer.textContent = minutes + ':' + seconds;

    console.log(table.removeChild('tr'))

    // historySum = row.insertCell(2);
    // historySum.textContent = t + (minutes + ':' + seconds);
});

btnReset.addEventListener('click', e => {
    clearInterval(interval);
    seconds = "00";
    minutes = "00";

    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;

    // Removendo todos os nós filhos de um elemento
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

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
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendMinutes.innerHTML = minutes;
    }
}