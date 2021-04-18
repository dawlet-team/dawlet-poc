import { DeterminedOptions, extractOptions } from "../options"

describe("extractOptions", () => {
  const expectedDefaultOptions: DeterminedOptions = {
    isProd: true,
    port: 4000
  }
  it("returns default options when userGivenOptions is undefined", () => {
    const opt = extractOptions()
    expect(opt).toEqual(expectedDefaultOptions)
  })
  it("accepts isProd", () => {
    const opt = extractOptions({
      isProd: false
    })
    expect(opt).toEqual({
      ...expectedDefaultOptions,
      isProd: false
    })
  })
  it("accepts port", () => {
    const opt = extractOptions({
      port: 1000
    })
    expect(opt).toEqual({
      ...expectedDefaultOptions,
      port: 1000
    })
  })
})