import * as el from "./elements.js";
import state from "./state.js";
import * as timer from './timer.js'


export function toggleRunning() {
    state.isRunning = true;
    state.isRunning = document.documentElement.classList.toggle('running');
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);
    
    if (minutes == 0 && seconds == 0) {
        alert("Para comecar clique no botao + para adicionar 5 minutoos");
        reset()
        return
    }

    timer.countDown();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}

export function setUp(minutes, seconds) {
    minutes = Number(el.minutes.textContent);
    seconds = Number(el.seconds.textContent);

    minutes += 5;
    

    if (minutes > 59) {
        minutes = 59;
        toggleRunning();
    }
   

    timer.updateDisplay(minutes, seconds)

}

export function setLow(minutes, seconds) {
    minutes = Number(el.minutes.textContent);
    seconds = Number(el.seconds.textContent);

    minutes -= 5;

    if (minutes < 0) {
        minutes = 0;
    }

    if (minutes == 0 && seconds == 0) {
        alert("Para comecar clique no botao + para adicionar 5 minutos");
    }
   
    timer.updateDisplay(minutes, seconds)

}
