import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
<Header name="Anna"/>
         </div>
    );
  }
}

export default App;

