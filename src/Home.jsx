import React from "react";
import Navbar from "./component/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <header className="home-header">
        <div className="home-header-text">
          <h1>DesignNCode</h1>
          <p>Learn • Build • Get Industry Ready</p>
        </div>

        {/* WORKING ONLINE SVG */}
        <img
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700
"

          alt="Coding Illustration"
        />
      </header>

      {/* ROLE SECTION */}
      <section className="role-section">
        <div className="role-card student">
          <h2>Design</h2>
          <p>UI/UX, Figma & modern design systems.</p>
        </div>

        <div className="role-card company">
          <h2>Code</h2>
          <p>Frontend, Backend & Full-Stack development.</p>
        </div>

        <div className="role-card admin">
          <h2>Career</h2>
          <p>Projects, internships & job-ready skills.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        © 2026 DesignNCode | All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
