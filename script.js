// Part 1: Initialize Variables
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// Part 2: Update Time Display
function updateTime() {
    const currentTime = Date.now();
    const difference = currentTime - startTime + elapsedTime;
    const hours = Math.floor(difference / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

// Part 3: Start Stopwatch
document.getElementById('start').addEventListener('click', function () {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now();
        timerInterval = setInterval(updateTime, 1000);
    }
});

// Part 4: Pause Stopwatch
document.getElementById('pause').addEventListener('click', function () {
    if (isRunning) {
        isRunning = false;
        elapsedTime += Date.now() - startTime;
        clearInterval(timerInterval);
    }
});

// Part 5: Reset Stopwatch
document.getElementById('reset').addEventListener('click', function () {
    isRunning = false;
    elapsedTime = 0;
    clearInterval(timerInterval);
    document.getElementById('display').textContent = "00:00:00";
    document.getElementById('lap-list').innerHTML = "";
});

// Part 6: Record Lap Time
document.getElementById('lap').addEventListener('click', function () {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = document.getElementById('display').textContent;
        document.getElementById('lap-list').appendChild(lapTime);
    }
});
