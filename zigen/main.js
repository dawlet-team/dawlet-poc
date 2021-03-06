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

// core -> main -> dawlet
ipcMain.on('open-dawlet', (e, name) => {
  console.log('open dawlet', name);
  const dawletWindow = createDawletWindow(name);
  windows[name] = dawletWindow;
});

ipcMain.on('fetch-available-dawlets', event => {
  const dawletNames = fs
    .readdirSync('./dist')
    .filter(name => name.endsWith('.html'))
    .filter(filename => filename != 'corelet.html')
    .map(name => name.replace('.html', ''));
  event.returnValue = dawletNames;
});

ipcMain.handle('dawlet:invoke', (e, req) => {
  console.log('invoke ', req.name);
  const dawletWindow = windows[req.name];
  if (!dawletWindow) return Promise.reject(`dawlet ${req.name} doesn't activated`);
  const contents = dawletWindow.webContents;
  if (!contents) return Promise.reject(`dawlet ${req.name} doesn't activated`);

  return new Promise((resolve, reject) => {
    ipcMain.once(`dawlet:invoked:${req.name}`, (e, args) => {
      console.log('dwalet invoked ');
      resolve(args);
    });
    contents.send('invoke', req);
  });
});

// dawlet -> main -> core -> main -> dawlet
ipcMain.on('corelet:getState', (e, req) => {
  console.log('corelet:getState request', req);
  ipcMain.once(`corelet:gotState:${req.name}`, (e, args) => {
    console.log('got state', args);
    const dawletWindow = windows[req.name];
    if (!dawletWindow) return Promise.reject(`dawlet ${req.name} doesn't activated`);
    const contents = dawletWindow.webContents;
    if (!contents) return Promise.reject(`dawlet ${req.name} doesn't activated`);
    contents.send('dawlet:gotState', args);
  });
  mainWindow.webContents.send('getState', req);
  console.log('send getState to corelet');
});

// system
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
