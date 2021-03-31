import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gif from "../images/92hY.gif";
import Social from "../components/Social";
import Navbar from "../components/Navbar";

class Start extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="condiv home">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>The Industrial Digitisation 4.0</h1>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {<img src={gif} className="center" alt="gif of a conveyer"></img>}
          </div>
          <br />
          <h3>Introduction </h3>
          <p>
            The 18th Century was the spark that ignited the first industrial
            revolution, where factories and automobiles were powered by steam.
            The second industrial revolution graced the world mid the 19th
            century. It was the beginning of a global mass production, and the
            third industrial revolution followed closely mid the 20th century,
            right after the second world war. It was the era of the emergence of
            computer driven systems. The 21st century has witnessed, and still
            is witnessing, a remarkable and a rapid progression regarding
            technology, which is why the fourth industrial revolution is aiming
            to introduce and aid the prevailing of automated systems. With
            augmented reality, Artificial Intelligence, Machine Learning, Big
            data platforms, and more leading this transitional phase, there is
            certainly a lot to look forward to in the near future.
          </p>
          <Social />
        </div>
      </div>
    );
  }
}
export default Start;
