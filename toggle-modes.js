const btnTree = document.querySelector("#tree-mode");
const btnRain = document.querySelector("#rain-mode");
const btnCoffe = document.querySelector("#coffe-mode");
const btnFire = document.querySelector("#fire-mode");
import * as sounds from './FocusTimer/sounds.js'
import state from './FocusTimer/state.js';
const cards = document.querySelector('#cards')


// Função para remover todas as classes de modo
function removeModeClasses() {
    document.documentElement.classList.remove("tree", "rain", "coffe", "fire");
    state.isMute = true;
    sounds.modeAudio.treeAudio.pause();
    sounds.modeAudio.rainAudio.pause();
    sounds.modeAudio.coffeAudio.pause();
    sounds.modeAudio.fireAudio.pause();
}

// Função para ativar um modo específico
export function activateMode(mode) {
    removeModeClasses(); // Remove todos os modos ativos
    document.documentElement.classList.add(mode); // Adiciona o modo selecionado
    state.isMute = false;
}

// Adiciona eventos aos botões
btnTree.addEventListener('click', () => { 
    activateMode("tree"); 
    setTimeout(() => {
        if(!state.isMute) {
           sounds.modeAudio.treeAudio.play()
            return
        }

        sounds.modeAudio.treeAudio.pause()
    }, 200);

  

});
btnRain.addEventListener('click', () => { 
    state.isCloud = true;
    activateMode("rain"); 
    setTimeout(() => {
        if(!state.isMute) {
            sounds.modeAudio.rainAudio.play()
            return
        }

        sounds.modeAudio.rainAudio.pause()
    }, 200);

});
btnCoffe.addEventListener('click', () => { 
    state.IsStore = true;
    activateMode("coffe"); 
    setTimeout(() => {
        if(!state.isMute) {
            sounds.modeAudio.coffeAudio.play()
            return
        }

        sounds.modeAudio.coffeAudio.pause()
    }, 200);



});
btnFire.addEventListener('click', () => { 
    state.isFire = true;
    activateMode("fire"); 
    setTimeout(() => {
        if(!state.isMute) {
            sounds.modeAudio.fireAudio.play()
            return
        }

        sounds.modeAudio.fireAudio.pause()
    }, 200);


});




// here
cards.addEventListener("focus", (event) => {
    console.log("Clicou fora")
})
