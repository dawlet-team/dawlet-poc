import * as Tone from 'tone';
const { ipcRenderer } = require('electron');
import { PAUSE, PLAY_READY, PLAY_REQUEST, readyToPlay, updateScore } from '../modules/player';
import Synth from '../../synth';

const synth = new Synth();
const synthMiddleware = store => next => action => {
  switch (action.type) {
    case PLAY_REQUEST: {
      const dawlets = store.getState().dawlets.availableDawlets;
      console.log(dawlets);
      dawlets
        .reduce((promise, name) => {
          console.log(promise);
          return promise.then(() => {
            return ipcRenderer.invoke('dawlet:invoke', { name, score: store.getState().player.score }).then(score => {
              console.log(score);
              store.dispatch(updateScore(score));
              return;
            });
          });
        }, Promise.resolve())
        .then(score => {
          store.dispatch(readyToPlay());
        });
      break;
    }
    case PLAY_READY: {
      console.log('ready to play');
      synth.play(store.getState().player.score);
      break;
    }
    case PAUSE: {
      Tone.Transport.stop();
      break;
    }
  }
  let result = next(action);
  return result;
};

export default synthMiddleware;
