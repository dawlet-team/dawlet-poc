import { app, BrowserWindow } from 'electron'
import { spawn } from 'child_process'

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
 
  win.loadFile('lib/renderer/index.html')
  // tmp
  spawn("electron", ["../algolet/"]);
}
 
app.on('ready', createWindow);