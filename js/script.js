
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
        console.log('oi')
    }, 500);
}

var score = 0


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png'
        mario.style.width = '75px';
        mario.style.marginleft = '50px';
        music_game_over()
        clearInterval(loop)
    }
    score++
    document.querySelector('.score > p:nth-child(2)').innerHTML = 'x'+score.toString().padStart(10,'0')
}, 10);

function music_game_over() {
    var ls = ['./sounds/GameOver1.mp3', './sounds/GameOver2.mp3', './sounds/GameOver3.mp3', './sounds/GameOver4.mp3']
    const random = Math.floor(Math.random() * ls.length);
    var audio = new Audio(ls[random]);
    audio.play();
}

function tocar_musica(musica) {
    var audio = new Audio(musica);
    audio.play().then(_ => {
        // autoplay starts!
    }).catch(error => {
        //show error
    })
}


function iniciar() {
    document.addEventListener('keydown', jump);
    tocar_musica('./sounds/Musica tema mario.mp3')
}

iniciar()