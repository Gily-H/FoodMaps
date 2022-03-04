import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../images/homepage/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center max-w-5xl m-auto bg-white">
        <i>
          <img className="max-h-20" src={LOGO} alt="logo" />
        </i>
        <h2 className="ml-3 text-3xl font-bold text-orange-600">FoodMaps</h2>
        <div className="ml-auto pr-4 text-xl">Login</div>
      </div>
      <nav className="h-12 bg-green-800 shadow-lg">
        <ul className="flex h-full items-center justify-around max-w-5xl mx-auto text-center font-bold text-slate-100 ">
          <li>
            <NavLink to="/" className="navlink">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="map" className="navlink">
              MAP
            </NavLink>
          </li>
          <li>
            <NavLink to="stores-dashboard" className="navlink">
              STORES
            </NavLink>
          </li>
          <li>
            <NavLink to="resources" className="navlink">
              RESOURCES
            </NavLink>
          </li>
          <li>
            <NavLink to="data" className="navlink">
              DATA
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
