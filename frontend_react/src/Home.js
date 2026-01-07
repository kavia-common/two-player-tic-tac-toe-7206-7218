import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="center-container">
      <h1 className="main-title">Tic Tac Toe</h1>
      <p className="subtitle">A classic game for two players on the same device.</p>
      <Link to="/about" className="about-link">
        About
      </Link>
    </div>
  );
}

export default Home;
