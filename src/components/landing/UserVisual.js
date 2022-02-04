import React from "react";
import FAMILY_IMAGE from "../../images/homepage/familyShopping.jpg";
import "../../styles/landing/UserVisual.css";

const UserVisual = () => {
  return (
    <section class="user-section">
      <div class="user-container">
        <div class="family-img-container">
          <img class="family-shopping" src={FAMILY_IMAGE} alt="family-shopping" />
        </div>
        <div class="user-contribution-text">
          <h2>We Need Your Help</h2>
          <br />
          <p>
            For each neighborhood, we rely on the community members to fill in information on local food resources in
            their areas. Many local stores will offer relatively nutritious food at a fair price, however, not many of
            these stores are well known by their local community. In order to spread the word about these "hidden"
            resources, we are asking our users to contribute to our growing database of stores. By having a
            comprehensive list of stores and up-to-date details on their produce offerings, users can better plan their
            grocery shopping routes and budgets.
          </p>
          <a href="./maintenance.html">
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UserVisual;
