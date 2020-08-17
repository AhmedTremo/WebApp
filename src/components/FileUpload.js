import React, { Component } from "react";
import { Form, Button, ProgressBar, Alert } from "react-bootstrap";
import axios from "axios";

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      loaded: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", this.fileInput.current.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: (ProgressEvent) => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
        });
      },
    };
    axios
      .post("http://localhost:5000/files/upload", formData, config)
      .then((res) => {
        console.log(res);
        this.setState({ message: "File Uploaded" });
      })
      .catch((error) => {
        if (error.response.status === 500) {
          this.setState({ message: "There was a problem with the server " });
        } else {
          this.setState({ message: error.response.data.msg });
        }
      });
  }

  render() {
    return (
      <div>
        {this.state.message && (
          <Alert variant="info" dismissible>
            {this.state.message}
          </Alert>
        )}

        <Form onSubmit={this.handleSubmit}>
          <Form.File
            id="custom-file"
            label="Choose code file"
            custom
            ref={this.fileInput}
          />
          {this.state.message !== "No File Uploaded" &&
            this.state.loaded !== 0 && (
              <div className="form-group">
                <ProgressBar
                  max="100"
                  color="success"
                  now={this.state.loaded}
                  label={`${Math.round(this.state.loaded, 2)}%`}
                  animated
                />
              </div>
            )}
          <Button type="submit" variant="dark" size="sm">
            Upload
          </Button>
        </Form>
      </div>
    );
  }
}
