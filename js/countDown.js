//import { stopReset } from "./controls.js";

export function countDown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(displaySeconds.textContent);
        let minutes = Number(displayMinutes.textContent);
        
        if (seconds <= 0 && minutes > 0){
            seconds = 60;
            displayMinutes.textContent = String(minutes - 1).padStart(2, 0)
        }

        
        if (minutes == 0 && seconds == 0){
            reset()
            return // Esta 'quebrando' a function
        }


        displaySeconds.textContent = String(seconds -1).padStart(2, 0);

        countDown() // Recursividade
    }, 1000)
}



// O método setTimeout chama uma função após alguns milissegundos.
