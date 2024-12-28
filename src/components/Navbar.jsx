import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/assets/shared/logo.svg";
import "../design/Navbar.css";
import HamburgerMenu from "/assets/shared/icon-hamburger.svg";
import CloseHamburgerMenu from "/assets/shared/icon-close.svg";
import data from "../data.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Stäng menyn automatiskt om skärmen är större än en viss bredd
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Rensa eventlyssnaren när komponenten unmountas
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}

      <nav className="navbar">
        <img src={Logo} alt="logo" className="img-logo" />

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <div className={`closeHamburgerMenu ${isOpen ? "active" : ""}`}>
            <img
              src={CloseHamburgerMenu}
              alt="closehamburgermenu"
              onClick={toggleMenu}
            />
          </div>

          {data.links.map((link) => (
            <li key={link.label} className="links">
              <Link to={link.path} className="nav-link" onClick={toggleMenu}>
                <span>{link.index}</span> {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <img
          src={HamburgerMenu}
          className={`overlay ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        />
      </nav>
    </>
  );
};

export default Navbar;
