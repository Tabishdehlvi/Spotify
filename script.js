console.log("welcome");

// Initialiaz the Veriables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: 'Awari (Ek-Villan)', filePath: 'Songs/1.mp3', coverPath: 'Covers/1.jpg'},
    {songName: 'Baatein ye kabhi na', filePath: 'Songs/2.mp3', coverPath: 'Covers/2.jpg'},
    {songName: 'Banjara (Ek-Villan)', filePath: 'Songs/3.mp3', coverPath: 'Covers/3.jpg'},
    {songName: 'Love Mashup (Ashiqui 2)', filePath: 'Songs/4.mp3', coverPath: 'Covers/4.jpg'},
    {songName: 'Bekhayali (Kabir Singh)', filePath: 'Songs/5.mp3', coverPath: 'Covers/5.jpg'},
    {songName: 'Tujhe Kitna Chahne Lage', filePath: 'Songs/6.mp3', coverPath: 'Covers/6.jpg'},
    {songName: 'Pachtaoge', filePath: 'Songs/7.mp3', coverPath: 'Covers/7.jpg'},
]

masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime =  myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e)=> {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>=6) {
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0) {
        songIndex = 6
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
