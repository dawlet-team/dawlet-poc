import { app, BrowserWindow, ipcMain } from 'electron'
import { installDevTools } from '@dawlet/utils'
import { spawnDawlet } from './utils'
import { DawletIPC } from '../common/types'
import { bootstrap } from '@dawlet/core'

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  installDevTools()
  win.loadFile('lib/renderer/index.html')
}


const onSpawnDawlet: DawletIPC.spawnDawlet = (_, name) => spawnDawlet(name)

const main = async () => {
  app.on('ready', createWindow);
  ipcMain.on(DawletIPC.events.SPAWN_DAWLET, onSpawnDawlet) 
  await bootstrap()
}
 
main().catch(console.error)