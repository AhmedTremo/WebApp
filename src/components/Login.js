import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      users: [],
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    this.setState({
      username: "",
    });

    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data,
        });
      }
    });
  }

  userList() {
    return this.state.users.map((currentUser) => {
      return (
        <tr key={currentUser._id}>
          <td>{currentUser.username}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Create new user</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Create User"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
        <div>
          <h3>Username:</h3>
          <table className="table">
            <thead className="thread-light">
              <tr>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>{this.userList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
