import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="center-container">
      <h2 className="main-title">About</h2>
      <p className="about-desc">
        This is a simple two-player Tic Tac Toe app. Take turns and try to get three marks in a row!
      </p>
      <Link to="/" className="home-link">
        &larr; Back to Home
      </Link>
    </div>
  );
}

export default About;
