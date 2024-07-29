const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');

const songs = [
    {
        title: 'Song Title 1',
        artist: 'Artist 1',
        src: 'song1.mp3',
        cover: 'cover1.jpg'
    },
    {
        title: 'Song Title 2',
        artist: 'Artist 2',
        src: 'song2.mp3',
        cover: 'cover2.jpg'
    },
    {
        title: 'Song Title 3',
        artist: 'Artist 3',
        src: 'song3.mp3',
        cover: 'cover3.jpg'
    }
];

let currentSongIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function playPauseSong() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseBtn.textContent = 'Pause';
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseBtn.textContent = 'Pause';
}

playPauseBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Initial load
loadSong(songs[currentSongIndex]);
