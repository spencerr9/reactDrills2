import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      taskArray:[],
      inputBox:'',
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleInput(text){
    this.setState({
      inputBox: text
    })
  }
  
  handleAdd(){
    this.setState({
      taskArray: [...this.state.taskArray, this.state.inputBox],
      inputBox: ''
    })
  }

  render() {
    let mappedTasks = this.state.taskArray.map((e, i) => <h2 key={i}>{e}</h2>)

    console.log(this.state)
    return (
      <div className="App">
        <h1>My To Do List:</h1>
        <input 
          placeholder='Enter a task' 
          onChange={(e) => this.handleInput(e.target.value)}
          value={this.state.inputBox}
        ></input>
        <button onClick={(e) => this.handleAdd(e.target.value)} >Add</button>
        {mappedTasks}
      </div>
    );
  }
}

export default App;
