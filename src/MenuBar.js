import React, { Component } from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";


class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "top",
    };
  }

  menuItem (name, title, to, iconName) {
    return (
      <Menu.Item
        name={name}
        as={Link}
        to={to}
        active={this.state.activeItem === name}
        defaultactiveindex={this.state.activeItem}
      >
        <Icon name={iconName} size="small" />
        {title}
      </Menu.Item>
    );
  }

  handleItemClick(name) {
    this.setState({
      activeItem: name
    });
  }

  render() {
    return (
      <Container>
        <Menu
          inverted
          pointing
          fixed="bottom"
          icon="labeled"
          size="small"
          widths={5}
          defaultActiveIndex={this.state.activeItem}
        >
          {this.menuItem("top", "Top", "/", "home")}
          {this.menuItem("sounds", "Sounds", "/sounds", "music")}
          {this.menuItem("about", "About", "/about", "info")}
          {this.menuItem("works", "Works", "/works", "suitcase")}
          {this.menuItem("links", "Links", "/links", "linkify")}
        </Menu>
      </Container>
    );
  }
}

export default MenuBar;
