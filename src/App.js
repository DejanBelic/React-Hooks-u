import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
    isOn: false
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  render() {
    const { count } = this.state.count;
    return (
      <div className="App">
        hello world
        <button type="button" onClick={this.incrementCount}>
          Click me{' '}
        </button>
        {count}
        <h2>Toggle lights</h2>
        <div
          style={{
            height: '50px',
            width: '50px',
            background: this.state.isOn ? 'yellow' : 'grey'
          }}
          onClick={this.toggleLight}
        />
      </div>
    );
  }
}

export default App;
