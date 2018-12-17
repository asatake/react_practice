import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

class LogoHeader extends Component {
  render() {
    return (
      <Container>
        <div>
          <Header as="h1" textAlign="center">asatake.com</Header>
        </div>
      </Container>
    );
  }
}

export default LogoHeader;