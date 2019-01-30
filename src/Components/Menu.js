import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state;
      return (
        <Menu className="Menu" color="orange" fixed="top" fluid widths={4}>
          <Menu.Item
            active={activeItem === 'home'}
            href="/"
            name="home"
            onClick={this.handleItemClick}
          >
            {/* <Link to="/">Home</Link> */}
          </Menu.Item>

          <Menu.Item
            active={activeItem === 'events'}
            href="/events"
            name="events"
            onClick={this.handleItemClick}
          >
            {/* <Link to="/events">Events</Link> */}
          </Menu.Item>

          <Menu.Item
            active={activeItem === 'cards'}
            href="/cards"
            name="cards"
            onClick={this.handleItemClick}
          >
            {/* <Link to="/cards">Cards</Link> */}
          </Menu.Item>

          <Menu.Item
            active={activeItem === 'contact'}
            href="/contact"
            name="contact"
            onClick={this.handleItemClick}
          >
            {/* <Link to="/contact">Contact</Link> */}
          </Menu.Item>
        </Menu>
      );
    }
}

export default MenuExampleBasic;
