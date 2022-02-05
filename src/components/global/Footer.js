import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/global/Footer.css";

const Footer = () => {
  return (
    <footer>
      <ol>
        Sources
        <li>
          <a href="https://www1.nyc.gov/assets/foodpolicy/downloads/pdf/2018-Food-Metrics-Report.pdf">
            2018 Food Metrics Report
          </a>
        </li>
        <li>
          <a href="https://www.foodbanknyc.org/research-reports/">2021 Self-Sufficiency Standards Report</a>
        </li>
        <li>
          <a href="https://www.freepik.com/vectors/food">Food vector created by freepik - www.freepik.com</a>
        </li>
      </ol>

      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="">Map</NavLink>
        <NavLink to="">Resources</NavLink>
        <NavLink to="">Data</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
