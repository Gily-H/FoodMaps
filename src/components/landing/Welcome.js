import React from "react";
import "../../styles/landing/Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div class="welcome-heading">
        <div class="welcome-site-name">
          <h2>FoodMaps</h2>
        </div>
        <div class="welcome-site-description">
          <p>
            A community-driven site that hosts a collection of local food resources for families experiencing food
            insecurity. Find food banks, food pantries, farmer's markets, and bodegas that offer affordable nutritious
            food and much more, all within your local community. Compare offerings and prices of groceries to plan your
            food budget with ease
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
