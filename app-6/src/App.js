import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: [],
      input: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleInput(text){
    this.setState({input: text})
  }

  handleAdd(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>My To Do List:</h1>
        <input 
          onChange={e => this.handleInput(e.target.value)} 
          placeholder='Enter a new task'
          value={this.state.input}
        />
        <button onClick={this.handleAdd} >Add</button>
        <Todo parentList={this.state.list} />
      </div>
    );
  }
}

export default App;
