import React, { Component } from "react";
import { Container, Header, Segment, List, Message } from "semantic-ui-react";
// import axios from "axios";

class Top extends Component {
  fetchHistories() {
    // const request = axios.create({
    //   baseURL: "http://localhost:4000/api"
    // });
    // request.get("/history").then(res => {
    //   this.setState({
    //     histories: res.data
    //   });
    // });
    return [
      { date: "2018/01/01", body: "Create Pages." },
      { date: "2018/02/01", body: "New Content added." }
    ];
  }

  renderHistories() {
    const histories = this.fetchHistories();
    const list = histories.map((item, index) => 
      <List.Item>
        <List.Content>
          <List.Header>{item.body}</List.Header>
          <List.Description>{item.date}</List.Description>
        </List.Content>
      </List.Item>
    );

    return (
      <List divided relaxed>
        {list}
      </List>
    );
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Container>
          <Message
            icon="coffee"
            success
            size="large"
            header="Welcome to asatake.com"
            content="asatake.comへようこそ"
          />
          <Header as="h2">What's New</Header>
          <Segment>{this.renderHistories()}</Segment>
        </Container>
      </div>
    );
  }
}

export default Top;
