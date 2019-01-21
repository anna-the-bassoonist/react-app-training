import React, {Component } from 'react'
import { Menu } from 'semantic-ui-react'


class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e,{name}) => this.setState({ activeItem: name})

    render(){
        const {activeItem} = this.state
        return(
    <Menu className="Menu">
    <Menu.Item
    name='home'
    active={activeItem === 'home'}
    onClick={this.handleItemClick}
    >
    Home 
    </Menu.Item> 
    <Menu.Item
    name='form'
    onClick={this.handleItemClick}
    >
    Form 
    </Menu.Item> 
    <Menu.Item
    name='images'
    onClick={this.handleItemClick}
    >
    Images 
    </Menu.Item> 
    <Menu.Item
    name='cards'
    onClick={this.handleItemClick}
    >
    Cards 
    </Menu.Item> 
    </Menu>
            );
    }
}

export default MenuExampleBasic;
