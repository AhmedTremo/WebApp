import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import bgImage from "./images/cool-background.png";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Control from "./components/Control";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          width: "100vw",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/control" component={Control} />
          <Route path="/results" component={Results} />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
