import React from 'react';
import { 
  FaJava, FaPython, FaReact, FaDatabase, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaLinux, FaServer, FaLeaf 
} from 'react-icons/fa6';
import { SiSpringboot, SiDjango, SiMysql, SiVite } from 'react-icons/si';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

// A helper dictionary to map skill names to their corresponding icons
const skillIcons = {
  "Java": <FaJava />,
  "Python": <FaPython />,
  "Spring Boot": <SiSpringboot />,
  "Django": <SiDjango />,
  "JDBC / Servlets": <FaServer />,
  "Hibernate": <FaLeaf />,
  "MySQL": <SiMysql />,
  "SQL Design": <FaDatabase />,
  "React.js": <FaReact />,
  "HTML5": <FaHtml5 />,
  "CSS3 / Glassmorphism": <FaCss3Alt />,
  "Vite": <SiVite />,
  "Git": <FaGitAlt />,
  "Linux (WSL Ubuntu)": <FaLinux />,
  "REST APIs": <FaServer />
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span className="skills-subtitle">Arsenal</span>
        <h2 className="skills-title">Technologies I engineer with.</h2>
      </div>

      <div className="skills-categories-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="category-card">
            <h3 className="category-title">{category.title}</h3>
            
            <div className="skills-pills-container">
              {category.skills.map((skillName, sIdx) => (
                <span key={sIdx} className="skill-pill">
                  <span className="skill-icon">
                    {skillIcons[skillName] || <FaServer />} {/* Fallback icon if name doesn't match */}
                  </span>
                  {skillName}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;