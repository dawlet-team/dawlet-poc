// @flow
import * as InterpolationTypes from '../../constants/interpolation-types';

declare interface IScore {
  id: Id;
  tracks: Array<INote>;
}

declare interface INote {
  id: Id;
  clipId: Id;
  noteOn: INoteOn;
  noteOff: INoteOff;
  modulations: Array<IModulation>;
  noteNumber: Attribute<MidiNoteNumber>;
  offsetTime: Attribute<Tick>;
  selected: Attribute<boolean>;
  interpolation: Attribute<$Values<typeof InterpolationTypes>>;
}

declare interface INoteOn {
  id: Id;
  noteId: Id;
  noteOnVelocity: Attribute<NormalizedFloat>;
  pitchBend: Attribute<NormalizedFloat>;
  timbre: Attribute<NormalizedFloat>;
  pressure: Attribute<NormalizedFloat>;
  selected: Attribute<boolean>;
}

declare interface INoteOff {
  id: Id;
  noteId: Id;
  offsetTime: Attribute<Tick>;
  noteOffVelocity: Attribute<NormalizedFloat>;
  pitchBend?: Attribute<NormalizedFloat>;
  timbre?: Attribute<NormalizedFloat>;
  pressure?: Attribute<NormalizedFloat>;
  selected: Attribute<boolean>;
}

declare interface IModulation {
  id: Id;
  noteId: Id;
  offsetTime: Attribute<Tick>;
  noteOffVelocity: Attribute<NormalizedFloat>;
  pitchBend?: Attribute<NormalizedFloat>;
  timbre?: Attribute<NormalizedFloat>;
  pressure?: Attribute<NormalizedFloat>;
  selected: Attribute<boolean>;
}
