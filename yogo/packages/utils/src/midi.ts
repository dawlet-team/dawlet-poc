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
type Freq = ufloat;

declare namespace Midi {
  /** 128 to 255 */
  type StatusByte = uint8;
  type DataByte = uint7;
  type NoteNumber = uint7;
  type Message = [StatusByte, DataByte] | [StatusByte, DataByte, DataByte]
}

export const groupsToMidi = (groups: Dawlet.IGroup.Entity[]): { midiMessage: Midi.Message, offset: Ms}[] => {
  return [{ midiMessage: [60, 60, 60], offset: 1000}]
};

export const noteToMidi = (note: Dawlet.INote.Entity): { midiMessage: Midi.Message, offset: Ms}[] => {
  return [{ midiMessage: [60, 60, 60], offset: 1000}]
};
