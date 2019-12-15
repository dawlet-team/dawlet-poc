import React from 'react';
import { render } from 'react-dom';
import  * as Tone  from "tone"

import App from './components/app';
const root = document.querySelector('#root');
if (!root) throw new Error('#root element not found');
const synth = new Tone.Synth().toMaster();

render(<App synth={synth} />, root);
