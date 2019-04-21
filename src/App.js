import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
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

  componentWillMount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  componentDidMount() {
    document.write(`You have clicked ${this.state.count} of times.`);
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    document.write(`You have clicked ${this.state.count} of times.`);
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  };

  render() {
    const { count } = this.state.count;
    return (
      <div className="App">
        hello world
        <button onClick={this.incrementCount}>Click me </button>
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
        <h2>Mouse position </h2>
        <p>X position {this.state.x}</p>
        <p>Y position {this.state.y}</p>
      </div>
    );
  }
}

export default App;
