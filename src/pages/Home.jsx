import React, { useEffect } from "react";
import "../design/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Sätt body-klassen till "home" när komponenten mountas
    document.body.className = "home";
    return () => {
      // Rensa klassen när komponenten unmountas
      document.body.className = "";
    };
  }, []);
  return (
    <div className="homePage">
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
          <Link to="/destination">
            <button className="exploreButton">EXPLORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
