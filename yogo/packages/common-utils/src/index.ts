import *  as fs from 'fs'
import { join } from 'path'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

export const fetchAvailableDawlets = () => {
  return filterUnrelatedFolders(readPackagesFolder())
}

export const readPackagesFolder = () => {
  return fs.readdirSync(join(process.cwd(), '../'))
}


const UNRELATED_FOLDERS = ['common-utils', 'core', 'launcher', 'react-electron-webpack-config']

export const filterUnrelatedFolders = (folders: string[]) => folders.filter(folder => !UNRELATED_FOLDERS.includes(folder))


export function installDevTools() {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));
  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));
}