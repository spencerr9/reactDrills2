import React, { Component } from 'react';
import './App.css';
import Picture from './Picture'

class App extends Component {
  render() {
    let image = 'http://topcarsmagazine.com/wp-content/uploads/2017/07/14500902349_c5d538593a_z-300x300.jpg'
    return (
      <div className="App">
        <Picture parentImage={image} />
      </div>
    );
  }
}

export default App;
