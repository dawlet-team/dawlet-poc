import {
  noteToMidi
} from "./midi";
import { NoteFactory } from "../../engine/src/modules/note/factory";

describe("noteToMidi", () => {
  it("converts a single note into some MIDI messages and offset times", () => {
    const result = noteToMidi(NoteFactory.build());
    expect(result).toEqual([{ midiMessage: [60, 60, 60], offset: 1000}])
  });
});

