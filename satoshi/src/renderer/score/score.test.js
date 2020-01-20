// @flow
import { Constant, Expression } from '../core/Attribute';
import { Note } from './models/Note';
import { noteFactory } from '../../utils/factory';
import { getScore } from '../redux/interactors/getScore';

describe('Note', () => {
  it('is created with Constant', () => {
    const note = new Note({
      noteNumber: new Constant(122)
    });
    note.save();
    const score = getScore();
    expect(score.notes.length).toBe(1);
    expect(score.notes.data[note.id].noteNumber.value).toBe(122);
  });
  it('is created with Expression', () => {
    const note = new Note({
      noteNumber: new Expression('40 * 2')
    });
    note.save();
    const score = getScore();
    expect(score.notes.length).toBe(1);
    expect(score.notes.data[note.id].noteNumber.value).toBe(80);
  });
  it('gets all notes', () => {
    const note0 = noteFactory();
    const note1 = noteFactory();
    const note2 = noteFactory();
    expect(Note.all()).toHaveLength(0);
    note0.save();
    note1.save();
    note2.save();
    expect(Note.all()).toHaveLength(3);
    expect(Note.all()[0]).toBe(note0);
    expect(Note.all()[1]).toBe(note1);
    expect(Note.all()[2]).toBe(note2);
  });
  it('gets note by id', () => {
    const note0 = noteFactory();
    const note1 = noteFactory();
    const note2 = noteFactory();
    note0.save();
    note1.save();
    note2.save();
    expect(Note.find(note0.id)).toBe(note0);
    expect(Note.find(note1.id)).toBe(note1);
    expect(Note.find(note2.id)).toBe(note2);
  });
  it('gets note by conditions', () => {
    const note0 = noteFactory();
    const note1 = noteFactory();
    note0.save();
    note1.save();
    expect(Note.find({ noteNumber: note0.noteNumber.value })).toBe(note0);
    expect(Note.find({ offsetTime: note1.offsetTime.value })).toBe(note1);
    expect(Note.find({ noteNumber: -1234.567 })).toBe(undefined);
  });
});
