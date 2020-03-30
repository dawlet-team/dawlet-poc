import { app, BrowserWindow } from 'electron'
import { installDevTools } from '@dawlet/utils'
 
function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    },
    transparent: true,
  });

  installDevTools()
 
  win.loadFile('lib/renderer/index.html')
}
 
app.on('ready', createWindow);