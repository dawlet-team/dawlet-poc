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
  noteNumber: IAttribute<MidiNoteNumber>;
  offsetTime: IAttribute<Tick>;
  selected: IAttribute<boolean>;
  interpolation: IAttribute<$Values<typeof InterpolationTypes>>;
}

declare interface INoteOn {
  id: Id;
  noteId: Id;
  noteOnVelocity: IAttribute<NormalizedFloat>;
  pitchBend: IAttribute<NormalizedFloat>;
  timbre: IAttribute<NormalizedFloat>;
  pressure: IAttribute<NormalizedFloat>;
  selected: IAttribute<boolean>;
}

declare interface INoteOff {
  id: Id;
  noteId: Id;
  offsetTime: IAttribute<Tick>;
  noteOffVelocity: IAttribute<NormalizedFloat>;
  pitchBend?: IAttribute<NormalizedFloat>;
  timbre?: IAttribute<NormalizedFloat>;
  pressure?: IAttribute<NormalizedFloat>;
  selected: IAttribute<boolean>;
}

declare interface IModulation {
  id: Id;
  noteId: Id;
  offsetTime: IAttribute<Tick>;
  noteOffVelocity: IAttribute<NormalizedFloat>;
  pitchBend?: IAttribute<NormalizedFloat>;
  timbre?: IAttribute<NormalizedFloat>;
  pressure?: IAttribute<NormalizedFloat>;
  selected: IAttribute<boolean>;
}
