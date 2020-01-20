/* eslint no-unused-vars: 0 */
// These imports are for user inputs.
import { Note } from '../renderer/score/models/Note';
import { getScore } from '../renderer/redux/interactors/getScore';

export const evaluate = (script) => {
  return eval(script);
};
