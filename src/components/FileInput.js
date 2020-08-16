import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.File
          id="custom-file"
          label="Choose code file"
          custom
          ref={this.fileInput}
        />
        <br />
        <Button type="submit" variant="dark" size="sm">
          Upload
        </Button>
      </Form>
    );
  }
}
