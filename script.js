const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Play & Pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Update Play/Pause button
function updateButton() {
  const icon = video.paused ? '►' : '❚❚';
  toggle.textContent = icon;
}

// Skip
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle Range Updates
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Scrub through the video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Listen for events
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// Add event listeners for progress bar
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
  if (e.buttons === 1) scrub(e); // Only scrub if the mouse button is pressed
});
