import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Homepage
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <Link to="/control" className="nav-link">
              Control
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/results" className="nav-link">
              Results
            </Link>
          </li>
          <li className="navbar-item ml-auto">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
