import React from 'react';
import { render } from 'react-dom';
class SimpleDawelet extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple Dawlet</h1>
      </div>
    );
  }
}

const root = document.querySelector('#root');
if (!root) throw new Error('#root element not found');
render(<SimpleDawelet />, root);
