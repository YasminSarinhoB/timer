import { play, pause, stopReset } from './controls.js';
import { countDown } from './countDown.js';

playButton.addEventListener('click', function(){
    play();
    countDown();
});

pauseButton.addEventListener('click', function(){
    pause()
    clearTimeout(timerTimeOut);
})

stopButton.addEventListener('click', function(){
    stopReset()
})

timeUpdateOne.addEventListener('click', function(){
    displayMinutes.textContent = 25;
})

timeUpdateTwo.addEventListener('click', function(){
    displayMinutes.textContent = 30;
})

timeUpdateThree.addEventListener('click', function(){
    displayMinutes.textContent = 40;
})

timeUpdateFour.addEventListener('click', function(){
    displayMinutes.textContent = '0'+ 5; // arrumar essa ganbiarra
})

timeUpdateFive.addEventListener('click', function(){
    displayMinutes.textContent = 10;
})

timeUpdateSix.addEventListener('click', function(){
    displayMinutes.textContent = 15;
})

displayMinutes.addEventListener('click', function(){
    minutes = prompt('Digite a quantidade de minutos: ') || 25
    console.log(minutes)
    displayMinutes.textContent = minutes;
})
