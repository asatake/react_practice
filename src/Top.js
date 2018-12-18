import React, { Component } from "react";
import { Container, Header, Segment, List, Message } from "semantic-ui-react";
import axios from "axios";

class Top extends Component {
  constructor() {
    super();
    this.state = {
      histories: []
    };
  }

  formatHistories(data) {
    var list = [];

    for (var i in data.data) {
      var date = new Date(Date.parse(data.data[i].updated_at));
      list.push({
        date: date.toLocaleString(),
        body: data.data[i].description
      });
    }

    return list;
  }

  componentDidMount() {
    const request = axios.create({
      baseURL: "http://localhost:4000/api",
      withCredentials: true,
      headers: {
        Accept: "application/json"
      },
      responseType: "json"
    });
    request.get("/history/10").then(res => {
      const histories = this.formatHistories(res.data);
      this.setState({
        histories: histories
      });
    });
  }

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
              {this.state.histories.map((item, index) => (
                <List.Item>
                  <List.Header>{item.date}</List.Header>
                  <List.Description>{item.body}</List.Description>
                </List.Item>
              ))}
            </List>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Top;
