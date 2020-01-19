import *  as fs from 'fs'
import { join } from 'path'

export const fetchAvailableDawlets = () => {
  return fs.readdirSync(join(process.cwd(), '../'))
}
