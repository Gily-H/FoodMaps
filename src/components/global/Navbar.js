import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/global/Navbar.css";
import LOGO from "../../images/homepage/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="logo">
          <img src={LOGO} alt="logo" />
        </li>
        <NavLink to="" className="nav-link">
          HOME
        </NavLink>
        <NavLink to="" className="nav-link">
          MAP
        </NavLink>
        <NavLink to="" className="nav-link">
          RESOURCES
        </NavLink>
        <NavLink to="" className="nav-link">
          DATA
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
