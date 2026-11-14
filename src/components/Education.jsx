import React from 'react';
import { educationData } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-header">
        <span className="education-subtitle">Academic Background</span>
        <h2 className="education-title">Education Journey</h2>
      </div>

      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div key={index} className="education-card">
            <span className="edu-period">{item.period}</span>
            <h3 className="edu-degree">{item.degree}</h3>
            <h4 className="edu-institution">{item.institution}</h4>
            <p className="edu-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;