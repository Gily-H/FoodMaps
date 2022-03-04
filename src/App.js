import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, AddStorePage, StoresListPage } from "./components/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="stores-dashboard" element={<StoresListPage />} />
      <Route path="add-store-form" element={<AddStorePage />} />
    </Routes>
  );
};

export default App;
