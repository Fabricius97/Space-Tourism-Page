import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import "../design/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="logo" className="img-logo" />
        <hr />
        <ul className="navbar-links">
          <li>
            <Link to="/">
              00 <span style={{ opacity: "0.8" }}>HOME</span>
            </Link>
          </li>
          <li>
            <Link to="/destination">
              01 <span style={{ opacity: "0.8" }}>DESTINATION</span>
            </Link>
          </li>
          <li>
            <Link to="/crew">
              02 <span style={{ opacity: "0.8" }}>CREW</span>
            </Link>
          </li>
          <li>
            <Link to="/technology">
              03 <span style={{ opacity: "0.8" }}>TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
