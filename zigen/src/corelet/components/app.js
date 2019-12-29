import React, { Component } from 'react';
import Transport from './transport';
import Dawlets from './dawlets';

class App extends Component {
  render() {
    const { synth } = this.props;
    return (
      <div>
        <h1>Corelet</h1>
        <Transport synth={synth} />
        <Dawlets />
      </div>
    );
  }
}

export default App;
