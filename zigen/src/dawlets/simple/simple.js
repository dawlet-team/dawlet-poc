import BaseDawlet from '../BaseDawlet';
class SimpleDawelet extends BaseDawlet {
  render() {
    return <div><h1>Simple Dawlet</h1></div>
  }
}

import React from 'react';
import { render } from 'react-dom';

console.log("hello simple dawlet")
const root = document.querySelector('#root');
if (!root) throw new Error('#root element not found');
render(<SimpleDawelet/>, root);
