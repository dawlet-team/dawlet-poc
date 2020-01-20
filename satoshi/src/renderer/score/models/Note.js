// @flow
import * as InterpolationTypes from '../../../../constants/interpolation-types';
import { defaultNoteOptions } from '../../defaultOptions';
import { deepEqual } from 'assert';
import { getScore } from '../../redux/interactors/getScore';
import { generateId } from '../generateId';
import { updateScore } from '../../redux/modules/score';
import { store } from '../../redux/store';
import { cloneDeep } from 'lodash';

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

  constructor(options?: NoteOptions) {
    const defaultedOptions = Object.assign({}, defaultNoteOptions, options);
    this.id = generateId(this.constructor.name);
    this.noteNumber = defaultedOptions.noteNumber;
    this.offsetTime = defaultedOptions.offsetTime;
    this.selected = defaultedOptions.selected;
    this.interpolation = defaultedOptions.interpolation;
  }

  static find(idOrConditions: number | Object) {
    const score = getScore();
    if (typeof idOrConditions === 'number') {
      const id = idOrConditions;
      return score.notes.data[id];
    }
    if (typeof idOrConditions === 'object') {
      const conditions = idOrConditions;
      return score.notes.values.find((note) => {
        try {
          Object.keys(conditions).forEach((key) => {
            deepEqual(conditions[key], (note: any)[key].value);
          });
          return true;
        } catch {
          return false;
        }
      });
    }
  }

  static all() {
    return getScore().notes.values;
  }

  save() {
    const score = cloneDeep(getScore());
    score.notes.data[this.id] = this;
    store.dispatch(updateScore(score));
    return this.id;
  }
}
