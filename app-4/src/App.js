import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUser(text){
    this.setState({username: text})
  }

  handlePass(text){
    this.setState({password: text})
  }

  handleButton(){
    alert(`Username: ${this.state.username}     Password: ${this.state.password}`)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        Username:<input onChange={e => this.handleUser(e.target.value)} />
        Password:<input onChange={e => this.handlePass(e.target.value)} />
        <button onClick={e => this.handleButton(e.target.value)} >Login</button>
      </div>
    );
  }
}

export default App;
