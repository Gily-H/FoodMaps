import React from "react";
import FOOD_INSECURITY from "../../images/data-charts/foodInsecurityNyc2016.png";
import SUFFICIENCY_STANDARD from "../../images/data-charts/incomeAndSufficiencyStandard.png";
import "../../styles/landing/ChartVisual.css";

const ChartVisual = () => {
  return (
    <section className="data-section">
      <div className="nyc-data-container">
        <div className="nyc-stats-heading">
          <h1>2,378,730+</h1>
          <p>
            New York City residents do not earn enough income to sustain themselves with the basic necessities,
            including food
          </p>
        </div>
        <div className="nyc-stats-charts">
          <img className="food-insecurity-chart" src={FOOD_INSECURITY} alt="food-insecurity-chart" />
          <img className="sufficient-standards-chart" src={SUFFICIENCY_STANDARD} alt="food-sufficiency-chart" />
        </div>
      </div>
    </section>
  );
};

export default ChartVisual;
