// @flow
import { Constant, Expression } from '../core/Attribute';
import { Note } from './models/Note';
import score from '.';

describe('create Note', () => {
  beforeEach(() => {
    jest.mock('.', () => {
      const { Score } = require('./Score');
      return {
        __esModule: true,
        score: new Score()
      };
    });
  });
  test('with Constant', () => {
    const noteId = Note.create({
      noteNumber: new Constant(122)
    });
    console.log(score);
    expect(score.notes.length).toBe(1);
    expect(score.notes.data[noteId].noteNumber.value).toBe(122);
  });
  test('with Expression', () => {
    const noteId = Note.create({
      noteNumber: new Expression('40 * 2')
    });
    console.log(score);
    expect(score.notes.length).toBe(1);
    expect(score.notes.data[noteId].noteNumber.value).toBe(80);
  });
});
