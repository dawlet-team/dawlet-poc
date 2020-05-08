import {
  noteToMidi
} from "./midi";
import { NoteFactory } from "../../factory/lib";

describe("noteToMidi", () => {
  it("converts a single note into some MIDI messages and offset times", () => {
    const result = noteToMidi({
      id: 'test-note',
      freq: 440,
      duration: 1000,
      offset: 500
    });
    expect(result[0].midiMessage).toEqual([144, 69, 100]);
    expect(result[0].offset).toEqual(500);
    expect(result[1].midiMessage).toEqual([128, 69, 100]);
    expect(result[1].offset).toEqual(1500);
  });
});
