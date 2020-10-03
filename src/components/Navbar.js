import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from "../config/fire";

export default class Navbar extends Component {
  constructor(props) {
    super(props)

   
    this.logout= this.logout.bind(this);
   
}
  logout(){
    fire.auth().signOut();
    window.location.href='http://localhost:3000/';
  }
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
            <li className="navbar-item">
              <button onClick={this.logout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
