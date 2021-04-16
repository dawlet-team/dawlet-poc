import { midiIcon } from "./dragHandler"

describe("dragHandler", () => {
  it("resolves to midi.png", () => {
    expect(midiIcon).toMatch(/\/dawlets\/algolet\/main\/midi.png/)
  })
})