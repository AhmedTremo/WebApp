import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import bgImage from "../images/cool-background.png";
import gif from '../images/92hY.gif';
import Social from '../components/Social'
import Navbar from "./Navbar";
import Start from "./Start";
import Control from "./Control";
import Results from "./Results";
class Home extends Component {
render() {
return (
    <Router>
         
    <div
    style={{
      backgroundImage: `url(${bgImage})`,
      width: "100vw",
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
      <div className="container">
     
          <Navbar />
          <br />
          <Route path="/start" exact component={Start} />
          <Route path="/control" component={Control} />
          <Route path="/results" component={Results} />
        



</div>
</div>
</Router>
)
}
}
export default Home