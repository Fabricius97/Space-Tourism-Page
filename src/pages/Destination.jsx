import React, { useState } from "react";
import "../design/Destination.css";
import data from "../data.json";

const Destination = () => {
  const destinations = data.destinations;

  // State för vald destination (standard till första destinationen)
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  return (
    <div className="destination">
      <div className="hero-destination">
        <span>01</span> PICK YOUR DESTINATION
      </div>
      <div className="destination-info">
        {/* Bild för vald destination */}
        <div className="img-destination">
          <img
            src={selectedDestination.images.png}
            alt={selectedDestination.name}
          />
        </div>

        {/* Information om vald destination */}
        <div className="description-destination">
          {/* Knappar för att välja destination */}
          <div className="description-planets">
            {destinations.map((destination, i) => (
              <button
                key={i}
                className="planetButtons"
                onClick={() => setSelectedDestination(destination)}
              >
                {destination.name}
              </button>
            ))}
          </div>

          {/* Namn på vald planet */}
          <div className="planets-name">
            <h1>{selectedDestination.name}</h1>
          </div>

          {/* Beskrivning av vald planet */}
          <div className="description-text">
            <p>{selectedDestination.description}</p>
          </div>

          {/* Horisontell linje */}
          <div className="hr-line">
            <hr />
          </div>

          {/* Distans och resetid */}
          <div className="distanceAndTravelTime">
            <div className="distance">
              <p>AVG. DISTANCE</p>
              <p>{selectedDestination.distance}</p>
            </div>
            <div className="travelTime">
              <p>EST. TRAVEL TIME</p>
              <p>{selectedDestination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
