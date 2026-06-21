import React, { useEffect, useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const listRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'sayitforyou',
      description: 'A privacy-focused web app for sending anonymous emotional messages. Features a human-moderated workflow and delivers messages securely through Instagram.',
      tags: ['JavaScript', 'Google Apps Script', 'Google Sheets', 'Vercel'],
      image: '/sayitforyou.png',
      github: '#',
      live: 'https://sayitforyou.fun'
    },
    {
      id: 2,
      title: 'ShizenFlow',
      description: 'An AI-powered personal finance app that tracks expenses and investments while providing intelligent financial insights via Google Gemini.',
      tags: ['React', 'TypeScript', 'Supabase', 'Gemini AI'],
      image: '/ShizenFlow.png',
      github: '#',
      live: 'https://www.shizenflow.store/'
    },
    {
      id: 3,
      title: 'Gyan Jyoti Seva Samiti – NGO Website',
      description: 'Developed a responsive and user-friendly website for an NGO focused on showcasing its mission, activities, and services for special children. Clear navigation across About, Admissions, Gallery, and Contact sections.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Font Awesome'],
      image: '/Gyan Jyoti Seva Samiti – NGO Website.png',
      github: 'https://github.com/anujX-01/school-website',
      live: 'https://github.com/anujX-01/school-website'
    }
  ];

  // Individual project rows revealed with stagger
  useEffect(() => {
    const rows = listRef.current?.querySelectorAll('.project-row');
    if (!rows) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll" data-animation="animate-up">Featured Projects</h2>

        <div className="projects-editorial-list" ref={listRef}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-row ${index % 2 !== 0 ? 'row-reverse' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="project-content">
                {/* Big ghost number */}
                <span className="project-number">0{project.id}</span>

                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
