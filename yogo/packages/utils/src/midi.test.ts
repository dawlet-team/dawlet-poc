import {
  groupsToMidi,
  noteToMidi,
  ftom
} from "./midi";

describe("ftom", () => {
  it("takes freq and returns midi note number", () => {
    // C4
    expect(ftom(261)).toBe(60)
    // C3
    expect(ftom(130.5)).toBe(48)
    // A4
    expect(ftom(440)).toBe(69)
  })
})

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

describe("groupsToMidi", () => {
  it("converts multiple groups into MIDI messages and offset times", () => {
    const result = groupsToMidi([
      {
        id: 'test-group-0',
        notes: [
          {
            id: 'test-note-0',
            freq: 440,
            duration: 1000,
            offset: 0
          },
          {
            id: 'test-note-1',
            freq: 880,
            duration: 1000,
            offset: 0
          }
        ]
      },
      {
        id: 'test-group-1',
        notes: [
          {
            id: 'test-note-2',
            freq: 440,
            duration: 1000,
            offset: 2000
          }
        ]
      }
    ]);
    expect(result[0].midiMessage).toEqual([144, 69, 100]);
    expect(result[0].offset).toEqual(0);
    expect(result[1].midiMessage).toEqual([128, 69, 100]);
    expect(result[1].offset).toEqual(1000);
    expect(result[2].midiMessage).toEqual([144, 81, 100]);
    expect(result[2].offset).toEqual(0);
    expect(result[3].midiMessage).toEqual([128, 81, 100]);
    expect(result[3].offset).toEqual(1000);
    expect(result[4].midiMessage).toEqual([144, 69, 100]);
    expect(result[4].offset).toEqual(2000);
    expect(result[5].midiMessage).toEqual([128, 69, 100]);
    expect(result[5].offset).toEqual(3000);
  });
});

