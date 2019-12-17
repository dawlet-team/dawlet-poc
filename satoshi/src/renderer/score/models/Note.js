// @flow
import { idFactory } from '../../core/modules';
import * as InterpolationTypes from '../../../../constants/interpolation-types';
import { defaultNoteOptions } from '../../defaultOptions';
import { score } from '..';

export class Note implements INote {
  id: number;
  clipId: number;
  noteOn: INoteOn;
  noteOff: INoteOff;
  modulations: Array<IModulation>;
  noteNumber: Attribute<MidiNoteNumber>;
  offsetTime: Attribute<Tick>;
  selected: Attribute<boolean>;
  interpolation: Attribute<$Values<typeof InterpolationTypes>>;

  constructor(options?: NoteOptions) {
    const defaultedOptions = Object.assign({}, defaultNoteOptions, options);
    this.id = idFactory.make();
    this.noteNumber = defaultedOptions.noteNumber;
    this.offsetTime = defaultedOptions.offsetTime;
    this.selected = defaultedOptions.selected;
    this.interpolation = defaultedOptions.interpolation;
  }

  static get(id: number) {
    return {};
  }

  static create(options?: NoteOptions) {
    const id = idFactory.make();
    score.notes.data[id] = new Note(options);
    return id;
  }
  get modulations() {
    return [];
  }

  get noteOn() {
    return {};
  }

  get noteOff() {
    return {};
  }
}
