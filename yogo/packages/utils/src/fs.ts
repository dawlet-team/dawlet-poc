import *  as fs from 'fs'
import { join } from 'path'

export const pathToDawletsDir = join(process.cwd(), '../../dawlets')

export const pkgNameWithoutPrefix = (pkgName: string) => {
  if (pkgName.includes('@dawlet')) {
    return pkgName.replace("@dawlet/", "")
  }
  throw new Error(`${pkgName} is not a Dawlet package`)
}

export const fetchAvailableDawlets = () => {
  return readDawletsDir().map(retrieveDawletConfig)
}

export const readDawletsDir = () => {
  return fs.readdirSync(pathToDawletsDir)
}

export const retrieveDawletConfig = (folderPath: string): Dawlet.Config => {
  const packageJson = getPackageJson(folderPath)
  return {
    name: packageJson.name || folderPath,
    description: packageJson.description || "Dawlets are Awesome!",
    localizable: packageJson["dawlet"].localizable || false
  }
}

export const getPackageJson = (folder: string) => {
  const path = join(pathToDawletsDir, folder, 'package.json')
  const file = fs.readFileSync(path, { encoding: 'utf-8' })
  const json = JSON.parse(file)
  return json
}