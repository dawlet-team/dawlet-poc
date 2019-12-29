import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';
import { containerManager } from './core/ContainerManager';
import { insertMockData } from './score/mock';

containerManager.initContainer();
insertMockData();

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
