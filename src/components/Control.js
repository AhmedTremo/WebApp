import React, { Component } from "react";
import { CardDeck, Card, Button, Dropdown } from "react-bootstrap";
import bsCustomFileInput from "bs-custom-file-input";
import FileInput from "./FileInput";
import { Link } from "react-router-dom";

export default class Control extends Component {
  componentDidMount() {
    bsCustomFileInput.init();
  }

  render() {
    return (
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 50,
          }}
        >
          Choose an experiment
        </h2>
        <CardDeck>
          <Card border="info">
            <Card.Body>
              <Card.Title>Experiment 1</Card.Title>
              <Card.Text>
                You can choose a path from a predefined set of paths.{" "}
              </Card.Text>
            </Card.Body>

            <Card.Footer>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Choose a path
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="../results">Path 1</Dropdown.Item>
                  <Dropdown.Item href="../results">Path 2</Dropdown.Item>
                  <Dropdown.Item href="../results">Path 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Footer>
          </Card>
          <Card border="info">
            <Card.Body>
              <Card.Title>Experiment 2</Card.Title>
              <Card.Text>
                You can choose the destination location that you want the
                package to reach.{" "}
              </Card.Text>
            </Card.Body>

            <Card.Footer>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Choose a destination
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="../results">Destination 1</Dropdown.Item>
                  <Dropdown.Item href="../results">Destination 2</Dropdown.Item>
                  <Dropdown.Item href="../results">Destination 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Footer>
          </Card>
          <Card border="info">
            <Card.Body>
              <Card.Title>Experiment 3</Card.Title>
              <Card.Text>
                You can upload your own code to create the path that the package
                will take from start to end.{" "}
              </Card.Text>
              <FileInput />
            </Card.Body>

            <Card.Footer>
              <Link to="/results">
                <Button variant="primary">Run the code</Button>
              </Link>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
