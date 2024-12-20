import React from "react";
import "../design/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="heroText">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          <button className="exploreButton">
            <Link to="/destination">EXPLORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
