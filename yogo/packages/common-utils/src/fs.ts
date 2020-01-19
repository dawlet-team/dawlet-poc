import *  as fs from 'fs'
import { join } from 'path'

export const filterUnrelatedFolders = (folders: string[]) => folders.filter(folder => !UNRELATED_FOLDERS.includes(folder))

export const fetchAvailableDawlets = () => {
  return filterUnrelatedFolders(readPackagesFolder())
}

export const readPackagesFolder = () => {
  return fs.readdirSync(join(process.cwd(), '../'))
}

const UNRELATED_FOLDERS = ['common-utils', 'core', 'launcher', 'react-electron-webpack-config']