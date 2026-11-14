import React from 'react';
import { projectData } from '../data/portfolioData';
import Card from './Card'; // Import our reusable card
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <span className="projects-subtitle">Portfolio</span>
        <h2 className="projects-title">Featured Projects</h2>
      </div>
      
      <div className="projects-grid">
        {projectData.map((project) => (
          <Card 
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tech}
            links={[
              { label: 'GitHub', url: project.github, type: 'btn-github' },
              { label: 'Live Demo', url: project.demo, type: 'btn-demo' }
            ]}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;