import { app, BrowserWindow } from 'electron'
import { autoUpdater } from "electron-updater"
import { version } from '../package.json'
import { installDevTools, unhandled } from '@dawlet/utils'
import log from 'electron-log'
import { registerDragHandler } from './dragHandler'

log.info(`Algolet ${version} started`);
unhandled({showDialog: true})

function createWindow () {
  const title = `Algolet ${version}`
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    title
  });

  installDevTools()
 
  registerDragHandler()
  win.loadFile('lib/renderer/index.html')
  autoUpdater.checkForUpdatesAndNotify()
}
 
app.on('ready', createWindow);