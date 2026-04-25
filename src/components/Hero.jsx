import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import profileImg from '../assets/profile.png';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Interactive Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculates how far the mouse is from the center of the screen
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // Max movement 20px
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
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
          style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px) scale(1.1)` }}
        />
      </div>

      {/* Floating Animated Orbs */}
      <div className="hero-ambient-orbs">
        <div className="theme-orb orb-top"></div>
        <div className="theme-orb orb-bottom"></div>
      </div>

      {/* Unique Editorial Grid Layout with 3D Parallax Mouse Tracking */}
      <div
        className="container hero-editorial-grid"
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x * 0.2}deg) rotateX(${-mousePosition.y * 0.2}deg) translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >

        {/* Left Side: Avant-Garde Typography */}
        <div className="editorial-left">
          <h1 className="editorial-title">
            <div className="title-row animate-slide-up">
              <span className="continuous-float delay-1">A</span>
              <span className="continuous-float delay-2">N</span>
              <span className="continuous-float outline-char delay-3">U</span>
              <span className="continuous-float delay-4">J</span>
            </div>
            <div className="title-row indent animate-slide-up delay-200">
              <span className="continuous-float outline-char delay-5">C</span>
              <span className="continuous-float delay-6">H</span>
              <span className="continuous-float delay-7">A</span>
              <span className="continuous-float outline-char delay-8">N</span>
              <span className="continuous-float delay-9">D</span>
              <span className="continuous-float accent-dot delay-10">.</span>
            </div>
          </h1>
        </div>

        {/* Right Side: Structured Information */}
        <div className="editorial-right">

          <div className="editorial-meta animate-fade-in delay-300">
            <span className="meta-number continuous-pulse">01</span>
            {/* The line continuously stretches and shrinks */}
            <div className="meta-line continuous-stretch"></div>
            <span className="meta-label">Digital Craftsmanship</span>
          </div>

          <div className="editorial-bio animate-fade-in delay-400">
            <p>MERN Stack Developer | Building Scalable Web Applications</p>
            <br></br>
            <p>A computer science engineer focused on MERN stack, problem-solving, and creating real-world solutions that make an impact.</p>
          </div>

          <div className="editorial-actions animate-fade-in delay-500">
            <a href="#projects" className="btn-editorial continuous-glow">
              Explore Work <FiArrowRight className="icon-right continuous-bounce" />
            </a>

            <div className="editorial-socials">
              <a href="#" className="social-link">GH</a>
              <span className="separator">/</span>
              <a href="#" className="social-link">IN</a>
              <span className="separator">/</span>
              <a href="#" className="social-link">TW</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
