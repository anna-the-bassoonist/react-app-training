import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';


class MoreLess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
    increaseNumber = () => {
      this.props.onClick();
      this.setState({
        counter: this.state.counter + 1,
      });
    }
    reduceNumber = () => {
      this.props.onClick();
      this.setState({
        counter: this.state.counter - 1,
      });
    }
    resetNumber = () => {
      this.props.onClick();
      this.setState({
        counter: 0,
      });
    }
    render() {
      return (
        <div id="MoreLess">
          <p>Number: {this.state.counter}</p>
          <p>Clicks: {this.props.clicks}</p>
          <Button basic color="orange" onClick={this.increaseNumber}>more</Button>
          <Button basic color="olive" onClick={this.reduceNumber}>less</Button>
          <Button basic color="red" onClick={this.resetNumber}>reset</Button>

        </div>
      );
    }
}
MoreLess.propTypes = {
  clicks: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default MoreLess;

