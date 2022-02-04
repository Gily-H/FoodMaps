import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Footer } from "./components/global";
import "./styles/global/index.css";

ReactDOM.render(
  <Router>
    <Navbar />
    <App />
    <Footer />
  </Router>,
  document.getElementById("root")
);
