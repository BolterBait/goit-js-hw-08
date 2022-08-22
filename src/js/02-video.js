import Player from '@vimeo/player';
import _ from 'lodash';
import throttle from 'lodash.throttle/index';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';
player.setCurrentTime(+localStorage.getItem(STORAGE_KEY));

player.on('timeupdate', onTimeupdate);

function onTimeupdate(params) {
  localStorage.setItem(STORAGE_KEY, params.seconds);
  console.log(params.seconds);
}
_.throttle(() => {
  params.seconds;
}, 1000);
