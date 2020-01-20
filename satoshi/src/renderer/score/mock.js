import { noteFactory } from '../../utils/factory';

export const insertMockData = () => {
  const notes = Array(10)
    .fill({})
    .map((_) => noteFactory());
  notes.forEach((note) => note.save());
};
