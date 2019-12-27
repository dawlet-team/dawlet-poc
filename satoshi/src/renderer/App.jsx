// @flow
import React from 'react';
import './App.css';
import { MidiOut } from './dawlets/MidiOut';
import { TreeEditor } from './dawlets/TreeEditor';

export const App = () => (
  <div id="app">
    <h1>Hello from React!</h1>
    <MidiOut />
    <TreeEditor />
  </div>
);
