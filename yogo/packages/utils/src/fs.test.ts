import {
  fetchAvailableDawlets,
  readDawletsDir,
  getPackageJson,
  retrieveDawletConfig,
  pathToDawletsDir,
  pkgNameWithoutPrefix
} from "./fs";

describe("path to dawlets folder", () => {
  it("contains an absolute path", () => {
    expect(pathToDawletsDir).toMatch(/\/dawlet-poc\/yogo\/dawlets$/);
  });
});

describe("pkgNameWithoutPrefix", () => {
  it("throws error if the package is not a dawlet package", () => {
    expect(() => {
      pkgNameWithoutPrefix("example-let");
    }).toThrowErrorMatchingInlineSnapshot(
      `"example-let is not a Dawlet package"`
    );
  });
  it("returns pkgName without @dawlet", () => {
    expect(pkgNameWithoutPrefix("@dawlet/algolet")).toEqual("algolet")
  })
});

describe("fetchAvailableDawlets", () => {
  it("reads dawlets folder", () => {
    const dawlets = readDawletsDir();
    expect(dawlets).toMatchSnapshot();
  });
  it("fetches available dawlets", () => {
    expect(fetchAvailableDawlets()).toMatchSnapshot();
  });
});

describe("getPackageJson", () => {
  it("gets package json", () => {
    const json = getPackageJson("algolet");
    expect(json).toBeInstanceOf(Object);
  });
});

describe("retrieveDawletConfig", () => {
  it("gets dawlet config", () => {
    const algoletConfig = retrieveDawletConfig("algolet");
    expect(algoletConfig).toMatchSnapshot();
  });
});
