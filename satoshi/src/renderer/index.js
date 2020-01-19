import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';
import { containerManager } from './core/ContainerManager';
import { insertMockData } from './score/mock';
import { createStore } from './redux/createStore';
import { Provider } from 'react-redux';

containerManager.initContainer();
insertMockData();
const store = createStore();

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
