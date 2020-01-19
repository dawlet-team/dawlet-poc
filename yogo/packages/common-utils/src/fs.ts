import *  as fs from 'fs'
import { join } from 'path'

export const filterUnrelatedFolders = (folders: string[]) => folders.filter(folder => !UNRELATED_FOLDERS.includes(folder))

export const fetchAvailableDawlets = () => {
  return filterUnrelatedFolders(readPackagesFolder())
}

export const readPackagesFolder = () => {
  return fs.readdirSync(join(process.cwd(), '../'))
}

export const getPackageJson = (folder: string) => {
  const path = join(process.cwd(), '../', folder, 'package.json')
  const file = fs.readFileSync(path, { encoding: 'utf-8' })
  const json = JSON.parse(file)
  return json
}

const UNRELATED_FOLDERS = ['common-utils', 'core', 'launcher', 'react-electron-webpack-config']