import React, { Component } from 'react';
import Header from '../Components/Header';
import Container from '../Components/Container';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header date={new Date()} name="" />
        <Container />
      </div>
    );
  }
}

export default Home;
