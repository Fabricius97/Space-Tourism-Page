import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/assets/shared/logo.svg";
import "../design/Navbar.css";
import HamburgerMenu from "/assets/shared/icon-hamburger.svg";
import CloseHamburgerMenu from "/assets/shared/icon-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <img
          src={Logo}
          width={48}
          height={48}
          alt="logo"
          className="img-logo"
        />

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <div className={`closeHamburgerMenu ${isOpen ? "active" : ""}`}>
            <img
              src={CloseHamburgerMenu}
              width={24}
              height={24}
              alt="closehamburgermenu"
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            />
          </div>

          <li className="links">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              00 <span style={{ opacity: "0.8" }}>HOME</span>
            </Link>
          </li>
          <li>
            <Link to="/destination" className="nav-link" onClick={toggleMenu}>
              01 <span style={{ opacity: "0.8" }}>DESTINATION</span>
            </Link>
          </li>
          <li>
            <Link to="/crew" className="nav-link" onClick={toggleMenu}>
              02 <span style={{ opacity: "0.8" }}>CREW</span>
            </Link>
          </li>
          <li>
            <Link to="/technology" className="nav-link" onClick={toggleMenu}>
              03 <span style={{ opacity: "0.8" }}>TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
        <img
          src={HamburgerMenu}
          className={`overlay ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
        />
      </nav>
    </>
  );
};

export default Navbar;
