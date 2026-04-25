import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
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
      description: 'Developed a responsive and user-friendly website for an NGO, Gyan Jyoti Seva Samiti, focused on showcasing its mission, activities, and services for special children. The platform provides clear navigation across sections like About, Admissions, Gallery, and Contact, ensuring an engaging and accessible experience for users.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Font Awesome'],
      image: '/Gyan Jyoti Seva Samiti – NGO Website.png',
      github: 'https://github.com/anujX-01/school-website',
      live: 'https://github.com/anujX-01/school-website'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll" data-animation="animate-up">Featured Projects</h2>
        
        <div className="projects-editorial-list">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-row ${index % 2 !== 0 ? 'row-reverse' : ''} animate-on-scroll delay-${(index + 1) * 100}`}
              data-animation="animate-up"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
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
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <FiExternalLink />
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
