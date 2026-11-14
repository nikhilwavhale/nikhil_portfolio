import React from 'react';
import { heroData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container" id="about">
      <div className="hero-content">
        <div className="status-badge">
          <span className="pulse-dot"></span> {heroData.status}
        </div>

        <h1 className="hero-title">
          Hi, I'm {heroData.name} <br />
          <span className="gradient-text">{heroData.title}</span>
        </h1>

        <p className="hero-description">{heroData.description}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href={heroData.resumeLink} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>

      {/* Dynamic Profile Picture Card */}
      <div className="hero-visual">
        <div className="profile-img-container">
          <img src={heroData.image} alt={heroData.name} className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;