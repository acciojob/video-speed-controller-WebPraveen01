const video = document.getElementById('video');
const playPauseButton = document.getElementById('playPause');
const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progress__filled');
const rewindButton = document.getElementById('rewind');
const skipButton = document.getElementById('skip');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const speedLabel = document.getElementById('speed-label');

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = '❚ ❚'; // Change to pause symbol
  } else {
    video.pause();
    playPauseButton.textContent = '►'; // Change to play symbol
  }
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function rewind() {
  video.currentTime -= 10; // Rewind 10 seconds
}

function skip() {
  video.currentTime += 25; // Skip 25 seconds
}

function updateVolume() {
  video.volume = volumeControl.value;
}

function updatePlaybackSpeed() {
  video.playbackRate = playbackSpeedControl.value;
  speedLabel.textContent = `${playbackSpeedControl.value}×`;
}

// Event listeners
playPauseButton.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);
rewindButton.addEventListener('click', rewind);
skipButton.addEventListener('click', skip);
volumeControl.addEventListener('input', updateVolume);
playbackSpeedControl.addEventListener('input', updatePlaybackSpeed);

// Initialize volume and playback speed
volumeControl.value = video.volume;
playbackSpeedControl.value = video.playbackRate;
speedLabel.textContent = `${playbackSpeedControl.value}×`;
