const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const pauseButton = document.querySelector('.pause');
const selectTime = document.querySelector('.select-time');

let displayMinutes = document.querySelector('.minutes');
let displaySeconds = document.querySelector('.seconds');
let timerUpdate = document.querySelector('.btn');

let minutes = Number(displayMinutes.textContent);
let seconds = Number(displaySeconds.textContent)

let timerTimeOut;
let timeOut;

const timeUpdateOne =  document.querySelector('.one');
const timeUpdateTwo = document.querySelector('.two');
const timeUpdateThree = document.querySelector('.three');
const timeUpdateFour = document.querySelector('.four');
const timeUpdateFive = document.querySelector('.five');
const timeUpdateSix = document.querySelector('.six');