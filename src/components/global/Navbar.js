import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global/Navbar.css";
import LOGO from "../../images/homepage/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li class="logo">
          <img src={LOGO} alt="logo" />
        </li>
        <Link to="" className="nav-link">
          HOME
        </Link>
        <Link to="" className="nav-link">
          MAP
        </Link>
        <Link to="" className="nav-link">
          RESOURCES
        </Link>
        <Link to="" className="nav-link">
          DATA
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
