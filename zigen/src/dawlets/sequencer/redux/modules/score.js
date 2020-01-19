import { createAction } from 'redux-actions';

const SET_SCORE = 'score/SET_SCORE';
const TOGGLE_NOTE = 'score/TOGGLE_NOTE';
export const setScore = createAction(SET_SCORE);
export const toggleNote = createAction(TOGGLE_NOTE, (note, tick) => ({ note, tick }));

import { cloneScore, Note } from '../../../../score';

const InitialState = {
  currentScore: null,
};
const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_SCORE: {
      return { ...state, currentScore: action.payload };
    }
    case TOGGLE_NOTE: {
      const score = cloneScore(state.currentScore);
      const { note, tick } = action.payload;
      const frame = score.frames.find(f => f.tick === tick);
      const noteIndex = frame.notes.findIndex(n => n.frequency === note);
      console.log(frame, noteIndex);
      if (noteIndex !== -1) {
        frame.notes.splice(noteIndex, 1);
      } else {
        frame.notes.push(new Note(note));
      }
      return { ...state, currentScore: score };
    }
    default:
      return state;
  }
};

export default reducer;
