const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow,
  windows = {};

function createWindow() {
  if (process.env.NODE_ENV === 'development') {
    installDevTools();
  }
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
function createDawletWindow(name) {
  if (windows[name]) {
    return;
  }
  const dawletWindow = new BrowserWindow({
    width: 400,
    height: 400,
    x: 0,
    y: 0,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  dawletWindow.loadFile(`dist/${name}.html`);
  dawletWindow.on('closed', function() {
    if (windows[name]) {
      windows[name] = null;
    }
  });
  return dawletWindow;
}

ipcMain.on('open-dawlet', (e, name) => {
  console.log('open dawlet', name);
  const dawletWindow = createDawletWindow(name);
  windows[name] = dawletWindow;
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

function installDevTools() {
  const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));
  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));
}
