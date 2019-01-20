import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';
import Images from './Images';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Anna"/>
        <Header name="Franzi"/>
        <Button />
        <hr/> 
        <Images />
        <hr/> 
        <Card 
            header='Kathrina Novak'
            meta='Friend'
            decscription='Kathrina is a ....'
        />
         </div>
    );
  }
}

export default App;

