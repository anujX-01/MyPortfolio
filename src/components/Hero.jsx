import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import profileImg from '../assets/profile.png';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Interactive Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30; 
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section">

      {/* Blended Background Image */}
      <div className="hero-bg-wrapper">
        <img
          src={profileImg}
          alt="Ambient Background"
          className="hero-ambient-image"
          style={{ transform: `translate(${-mousePosition.x * 0.4}px, ${-mousePosition.y * 0.4}px) scale(1.1)` }}
        />
      </div>

      {/* Floating Animated Orbs */}
      <div className="hero-ambient-orbs">
        <div className="theme-orb orb-top"></div>
        <div className="theme-orb orb-bottom"></div>
      </div>

      {/* Main Content Grid */}
      <div
        className="container hero-editorial-grid"
        style={{
          transform: `perspective(1200px) rotateY(${mousePosition.x * 0.15}deg) rotateX(${-mousePosition.y * 0.15}deg) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      >

        {/* Left Side: Cinematic Typography */}
        <div className="editorial-left">
          <h1 className="editorial-title">
            <div className="title-row">
              <span className="reveal-text">A</span>
              <span className="reveal-text" style={{ animationDelay: '0.1s' }}>N</span>
              <span className="reveal-text outline-char" style={{ animationDelay: '0.2s' }}>U</span>
              <span className="reveal-text" style={{ animationDelay: '0.3s' }}>J</span>
            </div>
            <div className="title-row indent">
              <span className="reveal-text outline-char" style={{ animationDelay: '0.4s' }}>C</span>
              <span className="reveal-text" style={{ animationDelay: '0.5s' }}>H</span>
              <span className="reveal-text" style={{ animationDelay: '0.6s' }}>A</span>
              <span className="reveal-text outline-char" style={{ animationDelay: '0.7s' }}>N</span>
              <span className="reveal-text" style={{ animationDelay: '0.8s' }}>D</span>
              <span className="reveal-text accent-dot" style={{ animationDelay: '0.9s' }}>.</span>
            </div>
          </h1>
        </div>

        {/* Right Side: Structured Bio & Actions */}
        <div className="editorial-right">

          <div className="editorial-meta">
            <span className="meta-number">01</span>
            <div className="meta-line"></div>
            <span className="meta-label">Digital Craftsmanship</span>
          </div>

          <div className="editorial-bio">
            <p>MERN Stack Developer | Building Scalable Web Applications</p>
            <p style={{ marginTop: '1rem', fontStyle: 'normal', fontSize: '1rem', opacity: 0.8 }}>
              Computer Science Engineer focused on problem-solving and creating high-impact real-world solutions.
            </p>
          </div>

          <div className="editorial-actions">
            <a href="#projects" className="btn-editorial">
              Explore Work <FiArrowRight className="icon-right" />
            </a>

            <div className="editorial-socials">
              <a href="https://github.com/anujX-01" target="_blank" rel="noreferrer" className="social-link">GH</a>
              <span className="separator">/</span>
              <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="social-link">View Resume</a>
              <span className="separator">/</span>
              <a href="/assets/resume.pdf" download className="social-link">Download Resume</a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
