import React from 'react';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <h3>Now is {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

setInterval(1000);
export default Header;
