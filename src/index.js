import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Footer } from "./components/global";
import "./index.css";

ReactDOM.render(
  <Router>
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <main>
        <App />
      </main>
      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);
