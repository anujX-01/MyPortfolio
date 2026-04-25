import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUpRight } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="cinematic-footer">

      {/* Giant CTA Headline */}
      <div className="footer-cta">
        <a href="#contact" className="cta-headline">
          <span className="cta-text">Let's Work Together</span>
          <FiArrowUpRight className="cta-arrow" />
        </a>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>MERN STACK</span>
          <span className="marquee-dot">✦</span>
          <span>REACT</span>
          <span className="marquee-dot">✦</span>
          <span>NODE.JS</span>
          <span className="marquee-dot">✦</span>
          <span>MONGODB</span>
          <span className="marquee-dot">✦</span>
          <span>WEB DEVELOPMENT</span>
          <span className="marquee-dot">✦</span>
          <span>UI / UX</span>
          <span className="marquee-dot">✦</span>
          <span>MERN STACK</span>
          <span className="marquee-dot">✦</span>
          <span>REACT</span>
          <span className="marquee-dot">✦</span>
          <span>NODE.JS</span>
          <span className="marquee-dot">✦</span>
          <span>MONGODB</span>
          <span className="marquee-dot">✦</span>
          <span>WEB DEVELOPMENT</span>
          <span className="marquee-dot">✦</span>
          <span>UI / UX</span>
          <span className="marquee-dot">✦</span>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="container">
        <div className="footer-bottom-bar">

          <div className="footer-left-info">
            <span className="footer-year">{new Date().getFullYear()}</span>
            <span className="footer-copyright">© Anuj Chand. All rights reserved.</span>
          </div>

          <div className="footer-center-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-right-actions">
            <div className="footer-social-icons">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FiTwitter /></a>
            </div>
            <button className="top-btn" onClick={scrollToTop} aria-label="Back to top">
              TOP ↑
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
