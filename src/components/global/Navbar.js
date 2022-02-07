import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../images/homepage/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center max-w-5xl m-auto bg-white">
        <i>
          <img className="max-h-20" src={LOGO} alt="logo" />
        </i>
        <h2 className="ml-3 text-3xl font-bold text-orange-600">FoodMaps</h2>
        <div className="ml-auto text-xl">Login</div>
      </div>
      <nav className="h-12 bg-green-800">
        <div className="flex items-center justify-around h-full max-w-5xl mx-auto text-center text-slate-100 font-bold">
          <NavLink to="" className="flex-1">
            HOME
          </NavLink>
          <NavLink to="" className="flex-1">
            MAP
          </NavLink>
          <NavLink to="" className="flex-1">
            RESOURCES
          </NavLink>
          <NavLink to="" className="flex-1">
            DATA
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
