import React from 'react';
import { render } from 'react-dom';
import * as Tone from 'tone';

const { ipcRenderer } = require('electron');
import Synth from './synth';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';

import App from './components/app';
import { fetchDawlets } from './redux/modules/dawlets';

const root = document.querySelector('#root');
if (!root) throw new Error('#root element not found');
const synth = new Synth();
const store = createStore();
render(
  <Provider store={store}>
    <App synth={synth} />
  </Provider>,
  root
);
store.dispatch(fetchDawlets());
