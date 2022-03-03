import React from "react";
import { Welcome, MapVisual, TableVisual, ChartVisual, UserVisual } from "../landing";

const LandingPage = () => {
  return (
    <>
      <Welcome />
      <MapVisual />
      {/* <TableVisual /> */}
      {/* <ChartVisual /> */}
      <UserVisual />
    </>
  );
};

export default LandingPage;
