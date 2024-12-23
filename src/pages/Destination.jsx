import React from "react";
import "../design/Destination.css";
import moon from "../assets/destination/image-moon.png";

const Destination = () => {
  const planets = ["MOON", "MARS", "EUROPA", "TITAN"];
  return (
    <div className="destination">
      <div className="hero-destination">
        <h1>
          <span>01</span> PICK YOUR DESTINATION
        </h1>
      </div>
      <div className="destination-info">
        <div className="img-destination">
          <img src={moon} alt="moon" />
        </div>
        <div className="description-destination">
          <div className="description-planets">
            {planets.map((planet, i) => (
              <button key={i}>{planet}</button>
            ))}
          </div>
          <div className="planets-name">
            <h1>MOON</h1>
          </div>
          <div className="description-text">
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
