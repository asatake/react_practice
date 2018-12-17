import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Segment, Container, Dimmer, Loader } from "semantic-ui-react";
import MenuBar from "./MenuBar";
import LogoHeader from "./LogoHeader";
import Top from "./Top";
import Sounds from "./Sounds";
import About from "./About";
import Works from "./Works";
import Links from "./Links";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Segment>
            <LogoHeader />
          </Segment>

          <Dimmer page active={this.state.isLoading}>
            <Loader active={this.state.isLoading} />
          </Dimmer>
          
          <Container style={{ marginBottom: "7em" }}>
            <Route exact path="/" component={Top} />
            <Route path="/sounds" component={Sounds} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/links" component={Links} />
          </Container>
          <MenuBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
