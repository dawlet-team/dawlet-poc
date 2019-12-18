// @flow
import { containerManager } from '../core/ContainerManager';
import { Constant, Expression } from '../core/Attribute';
import { Note } from './models/Note';
import { getFromContainer } from '../core/getFromContainer';
import { Score } from './Score';

describe('Note', () => {
  it('is created with Constant', () => {
    containerManager.initContainer();
    const note = new Note({
      noteNumber: new Constant(122)
    });
    note.save();
    const score = getFromContainer(Score);
    expect(score.notes.length).toBe(1);
    expect(score.notes.data[note.id].noteNumber.value).toBe(122);
  });
  it('is created with Expression', () => {
    containerManager.initContainer();
    const note = new Note({
      noteNumber: new Expression('40 * 2')
    });
    note.save();
    const score = getFromContainer(Score);
    expect(score.notes.length).toBe(1);
    expect(score.notes.data[note.id].noteNumber.value).toBe(80);
  });
});
