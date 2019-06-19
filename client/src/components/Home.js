import React, { useState, useEffect, } from "react";
import axios from "axios";
import { Link, } from "react-router-dom"
import { Header, Image, Card, Button, Icon, } from "semantic-ui-react";

const Home = () => {
  const [humans, setHumans] = useState([]);
  
  useEffect( () => {
    axios.get("/api/humans")
      .then( res => setHumans(res.data))
  }, []); 

  const sample = () => {
    if (humans.length) {
      const index = Math.floor(Math.random() * humans.length);
      return humans[index];
    } else {
      return null;
    };
  };

  const downVote = (id) => {
    setHumans(humans.filter ( h => h.id !== id ));
  };

  const upVote = (id) => {
    axios.put(`/api/humans/${id}`)
      .then( () => setHumans(humans.filter( h => h.id !== id)) )
  };
  
  const human = sample();
    if (human){
      return (
        <div>
          <br />
          <Header as="h3" textAlign="center">My Face</Header>
          <br />
          <Card>
            <Image src={human.avatar} />
            <Card.Content>
              <Card.Header>
                { human.name }
              </Card.Header>
              <Card.Description>
                { human.race }
              </Card.Description>
              <Card.Meta>
                { human.quote}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="cyan" icon basic onClick={() => downVote(human.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="purple" icon basic onClick={() => upVote(human.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my-humans">
            <Button color="green">
              My Humans
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header as="h2" textAlign="center">NO MORE HUMANS</Header>
    };
};

export default Home;