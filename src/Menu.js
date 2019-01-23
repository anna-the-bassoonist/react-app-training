import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';


class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state;
      return (
        <Menu className="Menu">
          <Menu.Item
            active={activeItem === 'home'}
            name="home"
            onClick={this.handleItemClick}
          >
    Home
          </Menu.Item>
          <Menu.Item
            active={activeItem === 'form'}
            name="form"
            onClick={this.handleItemClick}
          >
    Form
          </Menu.Item>
          <Menu.Item
            active={activeItem === 'images'}
            name="images"
            onClick={this.handleItemClick}
          >
    Images
          </Menu.Item>
          <Menu.Item
            active={activeItem === 'cards'}
            name="cards"
            onClick={this.handleItemClick}
          >
    Cards
          </Menu.Item>
        </Menu>
      );
    }
}

export default MenuExampleBasic;
