const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

function updateButton() {
  const icon = this.paused ? '▶️' : '❚ ❚';
  toggle.textContent = icon;
}

const skipButtons = player.querySelectorAll('[data-skip]');
skipButtons.forEach(btn => btn.addEventListener('click', skip));

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
  console.log(this.dataset.skip);
}
const range = player.querySelectorAll('.player__slider');
range.forEach(input => input.addEventListener('input', handleChengeUpdate));

function handleChengeUpdate() {
  video[this.name] = this.value;
  console.log(this.name);
  console.log(this.value);
}

video.addEventListener('timeupdate', handleProgress);
const progressBar = player.querySelector('.progress__filled');
console.log(progressBar);
function handleProgress() {
  const persent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${persent}%`;
}

function skrub(evt) {
  const skrubTime = (evt.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = skrubTime;
}

let mouseDown = false;

progress.addEventListener('mousedown', () => (mouseDown = true));
progress.addEventListener('mouseup', () => (mouseDown = false));
progress.addEventListener('mousemove', evt => mouseDown && skrub(evt));
progress.addEventListener('click', skrub);
