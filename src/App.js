import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import bgImage from "./images/cool-background.png";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Start from "./components/Start";
import Control from "./components/Control";
import Results from "./components/Results";

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
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/start" component={Start} />
          <Route path="/control" component={Control} />
          <Route path="/results" component={Results} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
