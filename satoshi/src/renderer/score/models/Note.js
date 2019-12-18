// @flow
import * as InterpolationTypes from '../../../../constants/interpolation-types';
import { defaultNoteOptions } from '../../defaultOptions';
import { IdFactory } from '../../core/IdFactory';
import { Score } from '../Score';
import { getFromContainer } from '../../core/getFromContainer';

export class Note implements INote {
  id: Id;
  clipId: Id;
  noteOn: INoteOn;
  noteOff: INoteOff;
  modulations: Array<IModulation>;
  noteNumber: Attribute<MidiNoteNumber>;
  offsetTime: Attribute<Tick>;
  selected: Attribute<boolean>;
  interpolation: Attribute<$Values<typeof InterpolationTypes>>;
  _score: IScore;

  constructor(options?: NoteOptions) {
    const defaultedOptions = Object.assign({}, defaultNoteOptions, options);
    this._score = getFromContainer<Score>(Score);
    this.id = getFromContainer<IdFactory>(IdFactory).make();
    this.noteNumber = defaultedOptions.noteNumber;
    this.offsetTime = defaultedOptions.offsetTime;
    this.selected = defaultedOptions.selected;
    this.interpolation = defaultedOptions.interpolation;
  }

  // eslint-disable-next-line
  static get(id: number) {
    return {};
  }

  save() {
    this._score.notes.data[this.id] = this;
    return this.id;
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
