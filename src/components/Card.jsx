import React from 'react';
import './Card.css';

// A single reusable component for any card layout
const Card = ({ title, description, tags, links, children, className = '' }) => {
  return (
    <div className={`dynamic-card ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-desc">{description}</p>}
      
      {/* Optional children or custom content passed inside */}
      {children}

      {/* Optional tags array */}
      {tags && (
        <div className="card-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="card-tag">{tag}</span>
          ))}
        </div>
      )}

      {/* Optional action links */}
      {links && (
        <div className="card-links">
          {links.map((link, idx) => (
            <a key={idx} href={link.url} className={`btn ${link.type}`} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;