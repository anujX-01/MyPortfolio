import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

/**
 * Custom hook: show navbar on mouse/touch activity,
 * auto-hide after `delay` ms of inactivity.
 * Starts hidden by default.
 */
const useNavbarVisibility = (delay = 2500) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    // Show the navbar immediately on activity
    setVisible(true);

    // Clear any existing hide-timer
    if (timerRef.current) clearTimeout(timerRef.current);

    // Schedule a new hide after `delay` ms
    timerRef.current = setTimeout(() => setVisible(false), delay);
  }, [delay]);

  useEffect(() => {
    // Events that count as "activity"
    const events = ['mousemove', 'touchstart', 'touchmove'];

    events.forEach((evt) => window.addEventListener(evt, resetTimer, { passive: true }));

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  return visible;
};

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarVisible = useNavbarVisibility(2500);

  // Keep navbar visible while the mobile menu is open
  const isVisible = navbarVisible || mobileMenuOpen;

  // Add shadow and glass effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${
        !isVisible ? 'navbar--hidden' : ''
      }`}
    >
      <div className="nav-container">
        <a href="#home" className="logo">Anuj<span className="dot">.</span></a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
