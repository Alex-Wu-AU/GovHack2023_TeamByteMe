import React, { Component } from "react";
import { Menu, Image, Input } from "semantic-ui-react";

export default class MenuExampleHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header>
          <Image src="./images/logo.png" size="small" />
        </Menu.Item>
        <Menu.Item
          name="aboutUs"
          active={activeItem === "aboutUs"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Recent"
          active={activeItem === "jobs"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Report"
          active={activeItem === "locations"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Check suspicious url" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
