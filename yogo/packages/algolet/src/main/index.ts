import { app, BrowserWindow } from 'electron'
 
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
}
 
app.on('ready', createWindow);