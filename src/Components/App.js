import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Header from './Header';
import Container from './Container';
import Unicorn from './Unicorn/Unicorn';
import Button from './Button';
import Images from './Images';
import Card from './Card';
import wolf from './img/wolf.jpg';
import wolfe from './img/wolfe.jpg';
import Text from './Grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }


  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }
  render() {
    return (
      <div className="App">
        <Menu />
        <Header name="" />
        <Container />
        <hr />
        {/* <Unicorn
          hidden="true"
        /> */}
        <Button clicks={this.state.clicks} onClick={this.handleClick} />
        {this.state.clicks >= 10 ? <Unicorn /> : 'click 10 times to see what happens :)'}
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
        <Text />

      </div>
    );
  }
}

export default App;

