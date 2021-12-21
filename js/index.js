const keys = document.querySelectorAll('.key__item');

const play = (code) => {
    const audio = document.querySelector(`audio[data-key='${code}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

const playSound = (event) => {
    
    const code = event.currentTarget.dataset.key;
    play(code);
    event.currentTarget.classList.add('playing')
    
}

function removeTransition (event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
    // console.log(this);
}
  
keys.forEach(btn => { btn.addEventListener('click', playSound) });
keys.forEach(btn => 
    btn.addEventListener('transitionend', removeTransition
))
window.addEventListener('keydown', keyboardPlaySound);

function keyboardPlaySound(event) {
    
    const code = event.keyCode;
    play(code);
    // event.currentTarget.classList.add('playing')
    const key = document.querySelector(`.key__item[data-key='${code}']`)
    key.classList.add('playing');
}

