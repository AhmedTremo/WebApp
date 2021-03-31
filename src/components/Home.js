import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Start from "./Start";
import Control from "./Control";
import Results from "./Results";
class Home extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <br />
        <Route path="/start" component={Start} />
        <Route path="/control" component={Control} />
        <Route path="/results" component={Results} />
      </Router>
    );
  }
}
export default Home;
