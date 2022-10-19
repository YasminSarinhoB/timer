export {
    play,
    stopReset,
    pause
}

function play() {
    playButton.classList.add('hide');
    stopButton.classList.remove('hide');
    selectTime.classList.add('hide');
    pauseButton.classList.remove('hide');
} 

function timerUpdateDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2,'0')
    displaySeconds.textContent = String(seconds).padStart(2,'0')
}

function resetTimer() {
    timerUpdateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function stopReset() {
    stopButton.classList.add('hide');   
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
    selectTime.classList.remove('hide');

    resetTimer()
}

function pause() {
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
}