import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Header from './Header';
import Container from './Container';
import Button from './Button';
import Images from './Images';
import Card from './Card';

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
        <Card          image='https://cdn.pixabay.com/photo/2018/11/15/22/52/wolf-3818343_960_720.jpg'
            header='Kathrina Novak'
            meta='Friend'
            decscription='Kathrina is a ....'
        />
        <Card
           image= 'https://cdn.pixabay.com/photo/2015/05/15/14/54/channel-768762_960_720.jpg'
            header='Alexandra Gol'
            meta='Friend'
           
        />
         </div>
    );
  }
}

export default App;

