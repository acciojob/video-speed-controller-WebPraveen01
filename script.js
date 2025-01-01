// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


// Grab all the elements from the DOM
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressFilled = document.getElementById('progress');
const volumeControl = document.getElementById('volume');
const speedControl = document.getElementById('speed');
const rewindBtn = document.getElementById('rewindBtn');
const skipBtn = document.getElementById('skipBtn');

// Play/Pause Button Logic
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playPauseBtn.textContent = '►'; // Change to play symbol
    }
});

// Progress Bar Logic
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = progress + '%';
});

// Click on Progress Bar to seek
progressFilled.parentElement.addEventListener('click', (e) => {
    const seekTime = (e.offsetX / progressFilled.parentElement.offsetWidth) * video.duration;
    video.currentTime = seekTime;
});

// Volume Control Logic
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Playback Speed Control Logic
speedControl.addEventListener('input', () => {
    video.playbackRate = speedControl.value;
});

// Rewind 10 Seconds Logic
rewindBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Skip 25 Seconds Logic
skipBtn.addEventListener('click', () => {
    video.currentTime += 25;
});

