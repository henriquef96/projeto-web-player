let video = document.getElementById('video');
let botaoPlay = document.getElementById('botaoPlay');
let retroceder = document.getElementById('retroceder');
let avancar = document.getElementById('avancar');
let gifPlaying = document.getElementById('gif-play')
let barraProgresso = document.getElementById('barraProgresso')
let currentTime = document.getElementById('currentTime');
let duration = document.getElementById('duration');
let nomeMusicas = document.querySelectorAll('.nomeMusica');
let nomeMusicaText = document.querySelector('#nomeMusicaText');

let musicIndex = 0;
    
let musicas = [
    { nomeMusica: "Imagination", filePath: "video/1.mp4" },
    { nomeMusica: "Do I Wanna Know", filePath: "video/2.mp4" },
    { nomeMusica: "Feels Like Backwards", filePath: "video/3.mp4" },
    { nomeMusica: "When You Die", filePath: "video/4.mp4" },
    { nomeMusica: "Come A Little Closer", filePath: "video/5.mp4" },
    { nomeMusica: "The Look", filePath: "video/6.mp4" },
    { nomeMusica: "Sweater Weather", filePath: "video/7.mp4" },
    { nomeMusica: "Mr. Brightside", filePath: "video/8.mp4" },
    { nomeMusica: "In My Head", filePath: "video/9.mp4" },
    { nomeMusica: "Lonely Boy", filePath: "video/10.mp4" },
];

nomeMusicas.forEach((element, i) => {
    element.textContent = musicas[i].nomeMusica;
});

function playItem(index) {
    video.src = musicas[index].filePath;
    if (video.paused) {
        video.play();
        botaoPlay.classList.add('fa-circle-pause');
        nomeMusicaText.textContent = musicas[index].nomeMusica;
        gifPlaying.style.opacity = 1;
        video.classList.add('bg-video');
        playIcon.classList.add('fa-circle-pause')
    }
    
    else{
        botaoPlay.classList.add('fa-circle-play');
        gifPlaying.style.opacity = 0;
    }
}

function playVideo() {
    if (video.paused) {
        video.play();
        botaoPlay.classList.remove('fa-circle-play');
        botaoPlay.classList.add('fa-circle-pause');
        video.classList.add('bg-video');
        gifPlaying.style.opacity = 1
        nomeMusicaText.textContent = musicas[index].nomeMusica;
    }
    else {
        video.pause();
        botaoPlay.classList.remove('fa-circle-pause');
        video.classList.remove('bg-video');
        gifPlaying.style.opacity = 0
    }
}

video.addEventListener('timeupdate', () => {
    progress = parseInt((video.currentTime / video.duration) * 100);
    barraProgresso.value = progress
})

barraProgresso.addEventListener('change', () => {
    video.currentTime = barraProgresso.value * video.duration / 100
})

video.addEventListener('timeupdate', function () {
    let currentTimeMin = Math.floor(video.currentTime / 60);
    let currentTimeSec = Math.floor(video.currentTime % 60);
    let durationMin = Math.floor(video.duration / 60);
    let durationSec = Math.floor(video.duration % 60);
    currentTime.textContent = currentTimeMin + ":" + (currentTimeSec < 10 ? "0" : "") + currentTimeSec;
    duration.textContent = durationMin + ":" + (durationSec < 10 ? "0" : "") + durationSec;
});

document.getElementById('avancar').addEventListener('click', () => {
    if (musicIndex > 10) {
        musicIndex = 0;
    } else {
        musicIndex += 1
    }
    playItem(musicIndex);
});

document.getElementById('retroceder').addEventListener('click', () => {
    if (musicIndex < 0) {
        musicIndex = 1;
    } else {
        musicIndex -= 1;
    }
    playItem(musicIndex);
});

