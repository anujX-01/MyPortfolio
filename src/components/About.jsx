import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Section Header */}
        <div className="editorial-header animate-on-scroll" data-animation="animate-up">
          <span className="chapter-number">02 //</span>
          <h2 className="chapter-title">About Me</h2>
        </div>

        {/* Magazine Column Layout */}
        <div className="editorial-article animate-on-scroll" data-animation="animate-up" data-delay="0.1">
          <p className="article-text">
            <span className="drop-cap">H</span>ello! I'm Anuj, a <span className="highlight-text">full-stack developer</span> focused on building scalable and user-friendly web applications. I enjoy turning complex problems into simple, efficient, and intuitive digital solutions that deliver real value to users.
          </p>
          <p className="article-text">
            My journey into development started with curiosity about how websites work, which gradually evolved into a strong commitment to mastering modern web technologies and building impactful projects.
          </p>
          <p className="article-text">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source, or enjoying a good cup of coffee while designing my next project. Today, I specialize in the <span className="highlight-text">MERN stack</span>, working with technologies like <span className="highlight-text">React, Node.js, and modern JavaScript</span> to create dynamic and responsive applications. I focus on writing clean, maintainable code and continuously improving my problem-solving skills. Beyond coding, I actively explore new technologies, strengthen my <span className="highlight-text">DSA fundamentals</span>, and work on real-world projects to prepare myself for industry-level challenges.
          </p>
        </div>

        {/* Animated Stat Footer */}
        <div className="editorial-footer animate-on-scroll" data-animation="animate-up" data-delay="0.2">
          <div className="stat-block">
            <span className="stat-value">1+</span>
            <span className="stat-label">Years Learning &amp; Building</span>
          </div>
          <div className="stat-block">
            <span className="stat-value">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-block">
            <span className="stat-value">MERN</span>
            <span className="stat-label">Core Stack</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
