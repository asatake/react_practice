import React, { Component } from "react";
import { Container, Header, Segment, List, Message } from "semantic-ui-react";

const items = [
  { date: "2018/01/01", body: "Create." },
  { date: "2018/02/01", body: "New Content added." }
];

var list = [];
for (var i in items) {
  list.push(
    <List.Item>
      <List.Content>
        <List.Header>{items[i].body}</List.Header>
        <List.Description>{items[i].date}</List.Description>
      </List.Content>
    </List.Item>
  );
}

class Top extends Component {
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
          <Segment>
            <List divided relaxed>
              {list}
            </List>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Top;
