function Sound(selectorAudio) {
    const element = document.querySelector(selectorAudio);
    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Missing element or invalid selector')
    }
}

const buttonList = document.querySelectorAll('.tecla');

for(let i = 0; i < buttonList.length; i++) {
    
    const tecla = buttonList[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        Sound(idAudio);
    }

    tecla.onkeydown = function(event) {
        if (event.code == 'Space' || event.key == 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}



