import { ipcMain } from "electron"
import log from 'electron-log'
import { join } from 'path'

export const midiIcon = join(process.cwd(), './main/midi.png')

export const registerDragHandler = () => {
  ipcMain.on('ondragstart', (e, filePath) => {
    log.info(filePath)
    e.sender.startDrag({
      file: filePath,
      icon: midiIcon
    })
  })
}