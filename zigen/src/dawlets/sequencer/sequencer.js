import React from 'react';
import { render } from 'react-dom';
import { ipcRenderer } from 'electron';
import { Provider } from 'react-redux';

import createStore from './redux/createStore';
import App from './components/app';
import { setScore } from './redux/modules/score';

const store = createStore();

ipcRenderer.on('invoke', (e, args) => {
  console.log(e, args);
  const score = store.getState().score.currentScore;
  ipcRenderer.send('dawlet:invoked:sequencer', score);
});

ipcRenderer.on('dawlet:gotState', (e, req) => {
  console.log('got state ', req);
  store.dispatch(setScore(req));
});

const root = document.querySelector('#root');
if (!root) throw new Error('#root element not found');

ipcRenderer.send('corelet:getState', { name: 'sequencer' });
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
