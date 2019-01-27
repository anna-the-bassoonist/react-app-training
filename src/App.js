import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Header from './Header';
import Container from './Container';
import ImageExtra from './imageE/ImageExtra';
import Button from './Button';
import Images from './Images';
import Card from './Card';
import wolf from './img/wolf.jpg';
import wolfe from './img/wolfe.jpg';
import Grid from './Grid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header name="" />
        <Container />
        <hr />
        <ImageExtra
          hidden="true"
        />
        <Button />
        <hr />
        <Images />
        <hr />
        <Card
          description="Kathrina is a ...."
          header="Kathrina Novak"
          image={wolf}
          meta="Friend"
        />
        <Card
          header="Alexandra Kowal"
          image={wolfe}
          meta="Friend"
        />
        <hr />
        <Grid />
      </div>
    );
  }
}

export default App;

