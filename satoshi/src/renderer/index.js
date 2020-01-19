import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
