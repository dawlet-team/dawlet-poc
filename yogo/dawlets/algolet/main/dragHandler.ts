import { ipcMain } from "electron"
import { join } from 'path'

export const midiIcon = join(process.cwd(), './main/midi.png')

export const registerDragHandler = () => {
  ipcMain.on('ondragstart', (e, filePath) => {
    e.sender.startDrag({
      file: filePath,
      icon: midiIcon
    })
  })
}