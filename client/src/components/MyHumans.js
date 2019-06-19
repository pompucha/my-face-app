import React from "react";
import axios from "axios";
import { Card, Divider, Image, } from "semantic-ui-react";

class MyHumans extends React.Component {
  state = { humans: [], };

  componentDidMount() {
    axios.get("/api/my_humans")
      .then( res => this.setState({ humans: res.data, }))
  }

  render() {
    return (
      <Card.Group itemsPerRow={5}>
        { this.state.humans.map( human =>
          <Card key={human.id}>
            <Image src={human.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { human.name }
              </Card.Header>
            </Card.Content>
          </Card>
          )}
      </Card.Group>
    )
  }

}

export default MyHumans;