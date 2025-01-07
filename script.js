// Get references to DOM elements
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const volumeControl = document.getElementById('volume');
const speedControl = document.getElementById('speed');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');

// Play/Pause Button functionality
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = '❚ ❚'; // Change to pause icon
  } else {
    video.pause();
    playPauseBtn.textContent = '►'; // Change to play icon
  }
});

// Update Progress Bar
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

// Skip video forward and backward (10s and 25s)
rewindBtn.addEventListener('click', () => {
  video.currentTime -= 10;
});

forwardBtn.addEventListener('click', () => {
  video.currentTime += 25;
});

// Update Volume
volumeControl.addEventListener('input', () => {
  video.volume = volumeControl.value;
});

// Update Playback Speed
speedControl.addEventListener('input', () => {
  video.playbackRate = speedControl.value;
});

// Scrubbing the video progress bar (Click to seek)
progressBar.parentElement.addEventListener('click', (e) => {
  const progress = e.offsetX / progressBar.parentElement.offsetWidth;
  video.currentTime = progress * video.duration;
});
