import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Divider,
  Segment,
  List,
  Icon
} from "semantic-ui-react";
import "./components/Profile.js";

const Profile = () => {
  return (
    <Container>
      <Segment.Group>
        <Segment>
          <Header as="h3">Name</Header>
          浅井 茸人 (Taketo Asai)
        </Segment>
        <Segment>
          <List selection>
            <List.Item>
              <Icon name="twitter" color="blue" />
              <List.Content>
                <List.Header
                  as="a"
                  href="https://twitter.com/Mush_asatake/"
                  target="blank"
                >
                  Twitter: @Mush_asatake
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
        <Segment>
          <Header />
        </Segment>
      </Segment.Group>
      <Divider />
    </Container>
  );
};

const Agreement = () => {
  return (
    <Container>
      <Segment>
        <Header as="h3"><Icon name="check circle" color="green" /></Header>
        <List divided relaxed>
          <List.Item>
            当サイト内の作品は、販売中のものを除きフリー素材としてご利用いただいて構いませんが、著作権はすべて管理人に帰属します。
          </List.Item>
          <List.Item>
            利用報告は任意です。ただし、ご報告を頂いた際は宣伝等がしやすくなりますので、ぜひお気軽にご連絡ください。
          </List.Item>
        </List>
      </Segment>
      <Segment>
        <Header as="h3"><Icon name="x" color="red" /></Header>
        <List divided relaxed>          
          <List.Item>
            楽曲の第三者への再配布、転売などはしないでください。
          </List.Item>
          <List.Item>
            当サイト内の作品の使用により損害・損失が発生しましても、当方は一切の責任を負いません。ご了承ください。
          </List.Item>
        </List>
      </Segment>
    </Container>
  );
};

class About extends Component {
  constructor(props) {
    super(props);
    this.panes = [
      {
        menuItem: "利用規約",
        render: () => <Tab.Pane>{Agreement()}</Tab.Pane>
      },
      { menuItem: "Profile", render: () => <Tab.Pane>{Profile()}</Tab.Pane> }
    ];
  }

  render() {
    return (
      <div>
        <Container>
          <Header as="h1">About</Header>
          <Tab panes={this.panes} />
        </Container>
      </div>
    );
  }
}

export default About;
