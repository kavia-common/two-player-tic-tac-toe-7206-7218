import React from "react";
import { Link } from "react-router-dom";

/**
 * About page displays info about the Tic Tac Toe app in a modern, visually appealing card with hero styling.
 */
// PUBLIC_INTERFACE
function About() {
  return (
    <main className="about-hero-bg">
      <section className="about-hero-card" aria-label="About the Tic Tac Toe app">
        <h1 className="about-hero-title">About This Game</h1>
        <p className="about-hero-desc">
          Enjoy classic two-player Tic Tac Toe on a sleek, modern board.<br />
          Take turns, plan your moves, and try to claim victory or settle for a draw.<br />
          No logins, no hassles — just a quick challenge for you and a friend.
        </p>
        <Link to="/" className="about-cta-btn" aria-label="Go back to Home page">
          &larr; Back to Home
        </Link>
      </section>
    </main>
  );
}

export default About;
