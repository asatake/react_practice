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
          <Menu.Item
            name="top"
            as={Link}
            to="/"
            active={this.state.activeItem === "top"}
            onClick={() => this.handleItemClick("top")}
          >
            <Icon name="home" size="small" />
            Top
          </Menu.Item>
          <Menu.Item
            name="sounds"
            as={Link}
            to="/sounds"
            active={this.state.activeItem === "sounds"}
            onClick={() => this.handleItemClick("sounds")}
          >
            <Icon name="music" size="small" />
            Sounds
          </Menu.Item>
          <Menu.Item
            name="about"
            as={Link}
            to="/about"
            active={this.state.activeItem === "about"}
            onClick={() => this.handleItemClick("about")}
          >
            <Icon name="info" size="small" />
            About
          </Menu.Item>
          <Menu.Item
            name="works"
            as={Link}
            to="/works"
            active={this.state.activeItem === "works"}
            onClick={() => this.handleItemClick("works")}
          >
            <Icon name="suitcase" size="small" />
            Works
          </Menu.Item>
          <Menu.Item
            name="links"
            as={Link}
            to="/links"
            active={this.state.activeItem === "links"}
            onClick={() => this.handleItemClick("links")}
          >
            <Icon name="linkify" size="small" />
            Links
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default MenuBar;
