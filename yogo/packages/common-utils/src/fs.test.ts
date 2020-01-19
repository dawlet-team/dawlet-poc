import { fetchAvailableDawlets, readPackagesFolder, filterUnrelatedFolders, getPackageJson } from './fs'
describe('fetchAvailableDawlets', () => {
  it('reads packages folder', () => {
    const dawlets = readPackagesFolder()
    expect(dawlets).toMatchSnapshot()
  })
  it('filters out unrelated folders', () => {
    const folders = ['algolet', 'midilet', 'common-utils', 'core', 'launcher', 'react-electron-webpack-config']
    const filtered = filterUnrelatedFolders(folders)
    expect(filtered).toEqual(['algolet', 'midilet'])
  })
  it('fetches available dawlets', () => {
    expect(fetchAvailableDawlets()).toMatchSnapshot()
  })
})

describe('getPackageJson', () => {
  it('gets package json', () => {
    const json = getPackageJson(fetchAvailableDawlets()[0])
    expect(json).toHaveProperty('name')
  })
})