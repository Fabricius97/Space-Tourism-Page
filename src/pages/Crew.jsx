import React, { useEffect, useState } from "react";
import "../design/Crew.css";
import data from "../data.json";

const Crew = () => {
  const crewMembers = data.crew;

  const [selectedCrewMember, setSelectedCrewMember] = useState(crewMembers[0]);

  useEffect(() => {
    // Sätt body-klassen till "home" när komponenten mountas
    document.body.className = "crew";
    return () => {
      // Rensa klassen när komponenten unmountas
      document.body.className = "";
    };
  }, []);
  return (
    <div className="crewPage">
      <div className="crew-hero">
        <span>02</span> MEET YOUR CREW
      </div>
      <div className="crew-container">
        <div className="crew-infoContainer">
          <div className="crew-info">
            <span className="crew-role">{selectedCrewMember.role}</span>
            <span className="crew-name">{selectedCrewMember.name}</span>
            <span className="crew-bio">{selectedCrewMember.bio}</span>
          </div>
          <div>
            <div className="crew-toggle">
              {crewMembers.map((crewMember, i) => (
                <button
                  key={i}
                  className={`crewToggleButton ${
                    selectedCrewMember.name === crewMember.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedCrewMember(crewMember)}
                >
                  {crewMember.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="crew-img">
          <img
            src={selectedCrewMember.images.png}
            alt={selectedCrewMember.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
