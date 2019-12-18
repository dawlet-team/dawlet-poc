// @flow
import { composeGetFromContainer } from '../core/initContainer';
import { Constant, Expression } from '../core/Attribute';
import { Note } from './models/Note';
import getFromContainer from '../core/getFromContainer';
import { Score } from './Score';
jest.mock('../core/getFromContainer');

describe('Note', () => {
  it('is created with Constant', () => {
    // $flow-disable-line
    getFromContainer.mockImplementation(composeGetFromContainer());
    const note = new Note({
      noteNumber: new Constant(122)
    });
    note.save();
    const score = getFromContainer(Score);
    expect(score.notes.length).toBe(1);
    expect(score.notes.data[note.id].noteNumber.value).toBe(122);
  });
  it('is created with Expression', () => {
    // $flow-disable-line
    getFromContainer.mockImplementation(composeGetFromContainer());
    const note = new Note({
      noteNumber: new Expression('40 * 2')
    });
    note.save();
    const score = getFromContainer(Score);
    expect(score.notes.length).toBe(1);
    expect(score.notes.data[note.id].noteNumber.value).toBe(80);
  });
});
