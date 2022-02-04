import React from "react";
import FOOD_INSECURITY from "../../images/data-charts/foodInsecurityNyc2016.png";
import SUFFICIENCY_STANDARD from "../../images/data-charts/incomeAndSufficiencyStandard.png";
import "../../styles/landing/ChartVisual.css";

const ChartVisual = () => {
  return (
    <section class="data-section">
      <div class="nyc-data-container">
        <div class="nyc-stats-heading">
          <h1>2,378,730+</h1>
          <p>
            New York City residents do not earn enough income to sustain themselves with the basic necessities,
            including food
          </p>
        </div>
        <div class="nyc-stats-charts">
          <img class="food-insecurity-chart" src={FOOD_INSECURITY} alt="food-insecurity-chart" />
          <img class="sufficient-standards-chart" src={SUFFICIENCY_STANDARD} alt="food-sufficiency-chart" />
        </div>
      </div>
    </section>
  );
};

export default ChartVisual;
