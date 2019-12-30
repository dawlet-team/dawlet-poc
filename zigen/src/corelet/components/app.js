import React, { Component } from 'react';
import Transport from './transport';
import Dawlets from './dawlets';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Corelet</h1>
        <Transport />
        <Dawlets />
      </div>
    );
  }
}

export default App;
