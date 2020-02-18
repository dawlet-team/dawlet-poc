
import { join } from 'path'
import { spawn } from 'child_process'
import { pathToDawletsDir } from 'common-utils'

export const spawnDawlet = (dawletName: string) => {
  const args = join(pathToDawletsDir, dawletName)
  spawn("electron", [args])
}