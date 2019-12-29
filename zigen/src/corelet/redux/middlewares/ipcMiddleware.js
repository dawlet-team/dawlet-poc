import { ACTIVATE_DAWLET, FETCH_DAWLETS, fetchDawletsSuccess } from '../modules/dawlets';
const { ipcRenderer } = require('electron');

const ipcMiddleware = store => next => action => {
  switch (action.type) {
    case FETCH_DAWLETS: {
      store.dispatch(fetchDawletsSuccess(ipcRenderer.sendSync('fetch-available-dawlets')));
      break;
    }
    case ACTIVATE_DAWLET: {
      ipcRenderer.send('open-dawlet', action.payload);
      break;
    }
  }
  let result = next(action);
  return result;
};

export default ipcMiddleware;
