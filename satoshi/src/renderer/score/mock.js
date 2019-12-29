import getFromContainer from '../core/getFromContainer';
import { Score } from './Score';
import { noteFactory } from '../../utils/factory';

export const insertMockData = () => {
  const notes = Array(10)
    .fill({})
    .map((_) => noteFactory());
  notes.forEach((note) => note.save());
  const score = getFromContainer(Score);
  console.log(score);
};
