import * as JZZ from 'jzz'

type int = number;
type uint = number;
type float = number;
type ufloat = number;
/** 0 to 127 */
type uint7 = number;
/** 0 to 255 */
type uint8 = number;
/** 0 to 16383 */
type uint14 = number;
/** 0 to 1 */
type NormalizedFloat = number;
type Id = uint;
type Sec = ufloat;
type Ms = ufloat;
/** the unit is Hz */
type Freq = ufloat;

declare namespace Midi {
  /** 128 to 255 */
  type StatusByte = uint8;
  type DataByte = uint7;
  type NoteNumber = uint7;
  type Message = [StatusByte, DataByte] | [StatusByte, DataByte, DataByte]
}

const DEFAULT_VELOCITY = 100;
const DEFAULT_CHANNEL = 1;

/** Convert frequency into MIDI NoteNumber */
const ftom = (freq: Freq): Midi.NoteNumber => {
  const getBaseLog = (x, y) => {
    return Math.log(y) / Math.log(x);
  };
  const midiNoteNumber = 12 * getBaseLog(2, freq / 440) + 69;
  if (midiNoteNumber < 0) {
    return 0;
  }
  if (midiNoteNumber > 127) {
    return 127;
  }
  return midiNoteNumber;
};

type FIX_ME = any;

const jzzMidiToMidiMessage = (jzzMidi: FIX_ME): Midi.Message => jzzMidi.map(v => v);

export const groupsToMidi = (groups: Dawlet.IGroup.Entity[]): { midiMessage: Midi.Message, offset: Ms}[] => {
  return [{ midiMessage: [60, 60, 60], offset: 1000}]
};

export const noteToMidi = (note: Dawlet.INote.Entity): { midiMessage: Midi.Message, offset: Ms}[] => {
  const noteNumber = ftom(note.freq);
  const noteOnMsg = jzzMidiToMidiMessage(JZZ.MIDI.noteOn(DEFAULT_CHANNEL - 1, noteNumber, DEFAULT_VELOCITY));
  const noteOffMsg = jzzMidiToMidiMessage(JZZ.MIDI.noteOff(DEFAULT_CHANNEL - 1, noteNumber, DEFAULT_VELOCITY));
  return [
    {
      midiMessage: noteOnMsg as FIX_ME,
      offset: note.offset
    },
    {
      midiMessage: noteOffMsg as FIX_ME,
      offset: note.offset + note.duration
    }
  ];
};
