// Projects.js
import React from 'react';
import './Projects.css';

const Projects = ({ children }) => {
  return (
    <section className="projects-section">
      <h2 className="neon-text">Projects</h2>
      <div className="projects-container">{children}</div>
    </section>
  );
};

export default Projects;

