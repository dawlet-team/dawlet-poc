import { createAction } from 'redux-actions';
import { Score } from '../../score/Score';

export const UPDATE_SCORE = 'score/UPDATE_SCORE';

export const updateScore = createAction(UPDATE_SCORE);
const InitialState = new Score();

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
