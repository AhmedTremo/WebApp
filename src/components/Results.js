import React, { Component } from "react";
import { CardDeck, Card } from "react-bootstrap";

export default class Results extends Component {
  render() {
    return (
      <div>
        <h1>Results of the chosen Experiment</h1>
        <CardDeck>
          <Card border="info">
            <Card.Body>
              <Card.Title>Experiment (number)</Card.Title>
              <Card.Text>
               Results/ Graph corresponding to the chosen experiment.{" "}
              </Card.Text>
            </Card.Body>
            </Card> 
            <br></br>
            <br></br>
            <Card border="info">
            <Card.Body>
              <Card.Title>Live streaming</Card.Title>
              <Card.Text>
               Live stream of the chosen project.{" "}
              </Card.Text>
            </Card.Body>
            </Card>
            </CardDeck>
            

      </div>
    );
  }
}
