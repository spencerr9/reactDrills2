import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      input: ''
    }
  }

  handleInput(text){
    this.setState({input:text})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <input onChange={(e => this.handleInput(e.target.value))} />
        <br/>
        <br/>
        {this.state.input}
      </div>
    );
  }
}

export default App;
