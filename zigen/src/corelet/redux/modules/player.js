import { createAction } from 'redux-actions';

export const PLAY_REQUEST = 'player/PLAY_REQUEST';
export const PAUSE = 'player/PAUSE';
export const PLAY_READY = 'player/PLAY_READY';
export const UPDATE_SCORE = 'player/UPDATE_SCORE';

export const play = createAction(PLAY_REQUEST);
export const readyToPlay = createAction(PLAY_READY);
export const pause = createAction(PAUSE);
export const updateScore = createAction(UPDATE_SCORE);

const notes = ['C4', 'C4', 'D#4', 'E4', 'E#4', 'G4', 'G#4', 'A4', 'A#4'];
import { Score, Note, Frame } from '../../../score';
const score = new Score();
for (let i = 0; i < 16; i++) {
  score.frames.push(new Frame([new Note(notes[Math.floor(Math.random() * notes.length)], '16n')], i));
}

const InitialState = {
  playing: false,
  score: score,
  loading: false,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case PLAY_REQUEST:
      return { ...state, loading: true, playing: false };
    case PAUSE:
      return { ...state, playing: false };
    case UPDATE_SCORE:
      return { ...state, score: action.payload };
    case PLAY_READY: {
      return { ...state, loading: false, playing: true };
    }
    default:
      return state;
  }
};

export default reducer;
