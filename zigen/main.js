const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow,
  windows = {};

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('dist/corelet.html');
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
      webSecurity: false,
    },
  });

  dawletWindow.loadFile('dist/simple.html');
  dawletWindow.on('closed', function() {
    if (windows['simple']) {
      windows['simple'] = null;
    }
  });
  return dawletWindow;
}

ipcMain.on('openDawlet', e => {
  console.log('open dawlet');
  const dawletWindow = createDawletWindow();
  windows['simple'] = dawletWindow;
});

ipcMain.on('fetch-available-dawlets', event => {
  const dawletNames = fs
    .readdirSync('./dist')
    .filter(name => name.endsWith('.html'))
    .map(name => name.replace('.html', ''));
  event.returnValue = dawletNames;
});

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});

const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

if (process.NODE_ENV === 'development') {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));
  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));
}
