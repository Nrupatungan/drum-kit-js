const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
        audio.currentTime = 0;
        audio.play();
    })
})

window.addEventListener('keydown', keyplay);

keys.forEach(key => key.addEventListener('transitionend', transitionend));

function keyplay(key){
    const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    const key_div = document.querySelector(`div[data-key="${key.keyCode}"]`);
    if(!audio) return;

    // Add the transition classes again
    key_div.classList.replace('border-black', 'border-amber-300');
    key_div.classList.add('scale-[1.1]');
    key_div.classList.add('shadow-[5px_5px_50px_-10px_rgb(257,211,77)]');

    audio.currentTime = 0;
    audio.play();
}

function transitionend(e){
    e.target.classList.remove('scale-[1.1]');
    e.target.classList.replace('border-amber-300', 'border-black');
    e.target.classList.remove('shadow-[5px_5px_50px_-10px_rgb(257,211,77)]');
    console.log(e)
}