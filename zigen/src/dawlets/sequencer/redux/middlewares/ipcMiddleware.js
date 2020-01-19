const { ipcRenderer } = require('electron');

const ipcMiddleware = store => {
  return next => action => {
    const result = next(action);
    return result;
  };
};

export default ipcMiddleware;
