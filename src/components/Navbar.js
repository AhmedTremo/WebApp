import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from "../config/fire";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
    window.location.href = "http://localhost:3000/";
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/start" className="navbar-brand">
          Home
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item mr-auto">
              <Link to="/control" className="nav-link">
                Control
              </Link>
            </li>
            <li className="navbar-item mr-auto">
              <Link to="/results" className="nav-link">
                Results
              </Link>
            </li>
            <li className="navbar-item mr-auto">
              <Link onClick={this.logout} className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
