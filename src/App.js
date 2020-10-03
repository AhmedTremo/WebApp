import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import bgImage from "./images/cool-background.png";


import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";


function App() {
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
        
         
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          
        </div>
      </div>
    </Router>
  );
}

export default App;
