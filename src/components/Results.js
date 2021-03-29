import React, { Component } from "react";
import { CardDeck, Card } from "react-bootstrap";
import conveyorGraph from "../images/conveyorGraph.jpeg";
import ReactPlayer from "react-player";
import Navbar from "../components/Navbar";

export default class Results extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          Results of the chosen Experiment
        </h2>
        <br />
        <CardDeck>
          <Card border="info">
            <Card.Body>
              <Card.Title>Experiment (number)</Card.Title>
              <Card.Text>
                Results/ Graph corresponding to the chosen experiment.
              </Card.Text>
              {
                <img
                  src={conveyorGraph}
                  className="center"
                  alt="Conveyor Graph"
                  width="100%"
                ></img>
              }
            </Card.Body>
          </Card>
          <br></br>
          <br></br>
          <Card border="info">
            <Card.Body>
              <Card.Title>Live streaming</Card.Title>
              <Card.Text>Live stream of the chosen project. </Card.Text>
              <div className="wrapper">
                <ReactPlayer
                  width="100%"
                  height="300px"
                  url="https://www.youtube.com/watch?v=XAokGOEjAFs"
                  controls
                  muted
                />
              </div>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
