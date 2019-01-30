import React from 'react';
import Card from '../Components/Card';
import wolf from '../Components/img/wolf.jpg';
import wolfe from '../Components/img/wolfe.jpg';
import Input from '../Components/Input';

const Cards = () => (
  <div className="Cards">
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
    <br />
    <br />
    <Input />
    <br />
  </div>
);

export default Cards;
