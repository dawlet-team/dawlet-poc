import React from 'react';
import { render } from 'react-dom';
import { ipcRenderer } from 'electron';
class SimpleDawlet extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple Dawlet</h1>
      </div>
    );
  }
}
ipcRenderer.on('invoke', (e, args) => {
  console.log(e, args);
  const score = args.score;
  ipcRenderer.send('dawlet:invoked:simple', score);
});

const root = document.querySelector('#root');
if (!root) throw new Error('#root element not found');
render(<SimpleDawlet />, root);
