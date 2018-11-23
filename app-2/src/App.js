import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state ={
      items: ['spaghetti','ice cream','sushi','cheese', 'pizza']
    }
  }
  render() {
    let mappedItems = this.state.items.map(element => {
      return (
        <div key={`1 ${element}`}>
          <h2>{element}</h2>
        </div>
      )
    })

    return(
      <div className="App">
        {mappedItems}
      </div>
    )
  }
}

export default App;
