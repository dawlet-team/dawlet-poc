
import { join } from 'path'
import { spawn } from 'child_process'
import { pathToDawletsDir, pkgNameWithoutPrefix } from '@dawlet/utils'

export const spawnDawlet = (dawletName: string) => {
  const args = join(pathToDawletsDir, pkgNameWithoutPrefix(dawletName))
  spawn("electron", [args])
}