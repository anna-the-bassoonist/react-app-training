import React, { Component } from 'react';
import Button from '../Components/Button';
import Images from '../Components/Images';
import Unicorn from '../Components/Unicorn/Unicorn';


class Events extends Component {
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
      <div className="Events">
        <Button clicks={this.state.clicks} onClick={this.handleClick} />
        {this.state.clicks >= 10 ? <Unicorn /> : 'click 10 times to see what happens :)'}
        <hr />
        <Images />
      </div>
    );
  }
}

export default Events;
