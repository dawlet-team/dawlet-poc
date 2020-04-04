import { app, BrowserWindow } from 'electron'
import { version } from '../package.json'
import { installDevTools, unhandled } from '@dawlet/utils'

unhandled({showDialog: true})

function createWindow () {
  const title = `Algolet ${version}`
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    },
    transparent: true,
    frame: false,
    title,
  });

  installDevTools()
 
  win.loadFile('lib/renderer/index.html')
}
 
app.on('ready', createWindow);