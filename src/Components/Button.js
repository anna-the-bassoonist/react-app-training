import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';


class MoreLess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      clicks: 0,
    };
  }
    increaseNumber = () => {
      this.setState({
        counter: this.state.counter + 1,
        clicks: this.state.clicks + 1,
      });
    }
    reduceNumber = () => {
      this.setState({
        counter: this.state.counter - 1,
        clicks: this.state.clicks + 1,
      });
    }
    resetNumber = () => {
      this.setState({
        counter: 0,
        clicks: this.state.clicks + 1,
      });
    }
    render() {
      return (
        <div id="MoreLess">
          <p>Number: {this.state.counter}</p>
          <p>Clicks: {this.state.clicks}</p>
          <Button basic color="orange" onClick={this.increaseNumber}>more</Button>
          <Button basic color="olive" onClick={this.reduceNumber}>less</Button>
          <Button basic color="red" onClick={this.resetNumber}>reset</Button>

        </div>
      );
    }
}

export default MoreLess;
