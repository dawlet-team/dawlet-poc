// @flow
import { LINEAR } from '../../constants/interpolation-types';
import { Constant } from './core/Attribute';

export const defaultNoteOptions: NoteOptions = {
  noteOn: undefined,
  noteOff: undefined,
  modulations: undefined,
  noteNumber: new Constant(60),
  offsetTime: new Constant(0),
  selected: new Constant(false),
  interpolation: new Constant(LINEAR)
};
