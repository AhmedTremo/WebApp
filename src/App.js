import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Control from "./components/Control";
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/control" component={Control} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
  );
}

export default App;
