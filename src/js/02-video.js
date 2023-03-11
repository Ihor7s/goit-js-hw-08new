
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}

function setStopTime() {
  const timeStorage = localStorage.getItem(CURRENT_TIME);
  if (timeStorage) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
  }
}
setStopTime();