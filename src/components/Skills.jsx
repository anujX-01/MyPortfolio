import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const gridRef = useRef(null);

  const skills = [
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" />, category: 'Database' },
    { name: 'Express.js', icon: <SiExpress color="#888888" />, category: 'Backend' },
    { name: 'React', icon: <FaReact color="#61DAFB" />, category: 'Frontend Framework' },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" />, category: 'Runtime Environment' },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" />, category: 'Core Language' },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" />, category: 'Core Language' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" />, category: 'Styling Architecture' },
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" />, category: 'Structure' },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" />, category: 'Styling' },
    { name: 'Vite', icon: <SiVite color="#646CFF" />, category: 'Build Tooling' },
    { name: 'Git & GitHub', icon: <FaGitAlt color="#F05032" />, category: 'Version Control' },
    { name: 'Figma', icon: <FaFigma color="#F24E1E" />, category: 'UI / UX Design' },
    { name: 'Data Structure and Algorithm', icon: <FaCode color="#A855F7" />, category: 'Problem Solving' }
  ];

  // Simple Staggered Reveal
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.skill-card');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* Professional Editorial Header */}
        <div className="editorial-header animate-on-scroll" data-animation="animate-up">
          <span className="chapter-number">03 //</span>
          <h2 className="chapter-title">Technical Expertise</h2>
        </div>

        {/* Clear & Professional Grid */}
        <div className="skills-grid" ref={gridRef}>
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="skill-icon-wrapper">
                {skill.icon}
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
              
              {/* Subtle accent line that grows on hover */}
              <div className="skill-accent-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
