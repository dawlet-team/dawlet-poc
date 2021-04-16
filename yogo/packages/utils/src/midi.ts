import JZZ from 'jzz'
import JzzMidiSmf from 'jzz-midi-smf'
JzzMidiSmf(JZZ)

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

const DEFAULT_VELOCITY = 100;
const DEFAULT_CHANNEL = 1;
const bpm = 120;
/** ticks per beat `ticks = minutes * bpm * tpb` */
const ticksPerBeat = 480;
const msPerTick = 60 * 1e3 / bpm / ticksPerBeat;

/** Convert frequency into MIDI NoteNumber */
export const ftom = (freq: Freq): Midi.NoteNumber => {
  if(freq < 0) throw RangeError("frequency must be bigger than 0")
  const getBaseLog = (x: number, y: number) => {
    return Math.log(y) / Math.log(x);
  };
  const midiNoteNumber = Math.round(12 * getBaseLog(2, freq / 440) + 69);
  if (midiNoteNumber < 0) {
    return 0;
  }
  if (midiNoteNumber > 127) {
    return 127;
  }
  return midiNoteNumber;
};


const msToTick = (ms: Ms): Tick => {
  return ms / msPerTick;
};

const str2ab = (str: string) => {
  const buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
  const bufView = new Uint16Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};


export const groupsToMidi = (groups: Dawlet.IGroup.Entity[]): { midiMessage: Midi.Message, offset: Ms}[] => {
  return groups.flatMap(group => group.notes.flatMap(noteToMidi))
};

export const genSmf = (msgAndOffsets: { midiMessage: Midi.Message, offset: Ms}[]) => {
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

export const groupsToSmf = (groups: Dawlet.IGroup.Entity[]): ArrayBuffer => {
  return genSmf(groupsToMidi(groups));
};

export const noteToMidi = (note: Dawlet.INote.Entity): { midiMessage: Midi.Message, offset: Ms}[] => {
  const noteNumber = ftom(note.freq);
  const jzzMidiToMidiMessage = (jzzMidi: any): Midi.Message => jzzMidi.map((v: any) => v);
  const noteOnMsg = jzzMidiToMidiMessage(JZZ.MIDI.noteOn(DEFAULT_CHANNEL - 1, noteNumber, DEFAULT_VELOCITY));
  const noteOffMsg = jzzMidiToMidiMessage(JZZ.MIDI.noteOff(DEFAULT_CHANNEL - 1, noteNumber, DEFAULT_VELOCITY));
  return [
    {
      midiMessage: noteOnMsg,
      offset: note.offset
    },
    {
      midiMessage: noteOffMsg,
      offset: note.offset + note.duration
    }
  ];
};
