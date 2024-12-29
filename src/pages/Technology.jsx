import React, { useEffect, useState } from "react";
import "../design/Technology.css";
import data from "../data.json";

const Technology = () => {
  const technology = data.technology;

  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);

  useEffect(() => {
    // Sätt body-klassen till "home" när komponenten mountas
    document.body.className = "technology";
    return () => {
      // Rensa klassen när komponenten unmountas
      document.body.className = "";
    };
  }, []);
  return (
    <div className="technologyPage">
      <div className="technology-hero">
        <span>03</span> SPACE LAUNCH 101
      </div>
      <div className="technology-container">
        <div className="technology-infoContainer">
          <div className="technology-buttons">
            {technology.map((tech, index) => (
              <button
                key={index}
                className={`technology-button ${
                  selectedTechnology.name === tech.name ? "active" : ""
                }`}
                onClick={() => setSelectedTechnology(tech)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="technology-info">
            <span className="infoHero">THE TERMINOLOGY...</span>
            <span className="technology-name">{selectedTechnology.name}</span>
            <span className="technology-description">
              {selectedTechnology.description}
            </span>
          </div>
        </div>
        <div className="technology-imgContainer">
          <picture>
            <source
              srcSet={selectedTechnology.images.landscape}
              media="(max-width: 1024px)" /* Landscape används för mindre skärmar */
            />
            <img
              src={selectedTechnology.images.portrait}
              alt={selectedTechnology.name}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Technology;
