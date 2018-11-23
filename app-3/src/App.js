import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      items: ['computer', 'mouse', 'trackpad', 'keyboard', 'monitor'],
      input: ''
    }
  }

  handleInput(text){
    this.setState({input: text})
  }

  render() {
    let mappedItems = this.state.items.filter( (element, index) => {
      return element.includes(this.state.input)
    }).map( (element,index) => {
      return <h2 key={index}>{element}</h2>
    })
    console.log(this.state.input)
    return (
      <div className="App">
        <input onChange={e => this.handleInput(e.target.value)} />
        {mappedItems}
      </div>
    );
  }
}

export default App;
