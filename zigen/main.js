const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow, windows = {};

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('dist/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}
function createDawletWindow() {
  const dawletWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
  });

  dawletWindow.loadFile('dist/dawlets/simple/index.html');
  dawletWindow.on('closed', function() {
    if (windows["simple"]) {
      windows["simple"] = null;
    }
  });
  return dawletWindow;
}

ipcMain.on("openDawlet", (e) => {
  console.log('open dawlet');
  const dawletWindow = createDawletWindow();
  windows["simple"] = dawletWindow;
})

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});
