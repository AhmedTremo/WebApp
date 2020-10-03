import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/start" className="navbar-brand">
          Information
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
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
          </ul>
        </div>
      </nav>
    );
  }
}
