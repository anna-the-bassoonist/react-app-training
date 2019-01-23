import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Header from './Header';
import Container from './Container';
import Button from './Button';
import Images from './Images';
import Card from './Card';
import wolf from './img/wolf.jpg'
import wolfe from './img/wolfe.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header name=""/>
        <Container />
        <hr/> 
        <Button />
        <hr/> 
        <Images />
        <hr/> 
        <Card          
            image={wolf}
            header='Kathrina Novak'
            meta='Friend'
            decscription='Kathrina is a ....'
        />
        <Card
            image={wolfe}
            header='Alexandra Gol'
            meta='Friend'          
        />
         </div>
    );
  }
}

export default App;

