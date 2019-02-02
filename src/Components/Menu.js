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
            as={Link}
            name="home"
            onClick={this.handleItemClick}
            to="/"
          >
          </Menu.Item>

          <Menu.Item
            active={activeItem === 'events'}
            as={Link}
            name="events"
            onClick={this.handleItemClick}
            to="/events"
          >
          </Menu.Item>

          <Menu.Item
            active={activeItem === 'cards'}
            as={Link}
            name="cards"
            onClick={this.handleItemClick}
            to="/cards"
          >
          </Menu.Item>

          <Menu.Item
            active={activeItem === 'contact'}
            as={Link}
            name="contact"
            onClick={this.handleItemClick}
            to="/contact"
          >
          </Menu.Item>
        </Menu>
      );
    }
}

export default MenuExampleBasic;
