import * as JZZ from 'jzz'
import JzzMidiSmf from 'jzz-midi-smf'

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
type Tick = uint;
/** the unit is Hz */
type Freq = ufloat;

declare namespace Midi {
  /** 128 to 255 */
  type StatusByte = uint8;
  type DataByte = uint7;
  type NoteNumber = uint7;
  type Message = [StatusByte, DataByte] | [StatusByte, DataByte, DataByte]
}

type FIX_ME = any;

const DEFAULT_VELOCITY = 100;
const DEFAULT_CHANNEL = 1;
const bpm = 120;
/** ticks per beat `ticks = minutes * bpm * tpb` */
const ticksPerBeat = 480;
const msPerTick = 60 * 1e3 / bpm / ticksPerBeat;

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

const jzzMidiToMidiMessage = (jzzMidi: FIX_ME): Midi.Message => jzzMidi.map(v => v);

const msToTick = (ms: Ms): Tick => {
  return ms / msPerTick;
};

const str2ab = (str) => {
  const buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
  const bufView = new Uint16Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};

const initJzzMidiSmf = (): void => { JzzMidiSmf(JZZ) };

export const groupsToSmf = (groups: Dawlet.IGroup.Entity[]): ArrayBuffer => {
  return genSmf(groupsToMidi(groups));
};

// TODO: fix types
export const genSmf = (msgAndOffsets: { midiMessage: Midi.Message, offset: Ms}[]) => {
  initJzzMidiSmf();
  // @ts-ignore
  const mtrk = new JZZ.MIDI.SMF.MTrk();
  msgAndOffsets.forEach(({midiMessage, offset}) => {
    mtrk.add(msToTick(offset), new JZZ.MIDI(midiMessage));
  });
  // @ts-ignore
  const smf = new JZZ.MIDI.SMF(0, ticksPerBeat);
  smf.push(mtrk);
  return smf.dump()
};

export const groupsToMidi = (groups: Dawlet.IGroup.Entity[]): { midiMessage: Midi.Message, offset: Ms}[] => {
  return groups.flatMap(group => group.notes.flatMap(noteToMidi))
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
