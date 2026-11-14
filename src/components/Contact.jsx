import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa6';
import { contactData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-minimal-container">
        
        <p className="contact-status">
          <span className="status-dot"></span> Available for Opportunities
        </p>

        <h2 className="contact-massive-title">Let's build something <br/>extraordinary.</h2>
        
        <a href={`mailto:${contactData.email}`} className="contact-email-link">
          {contactData.email} <ArrowRight className="email-arrow" size={28} />
        </a>

        <div className="contact-divider"></div>

        <div className="contact-footer">
          <p className="copyright">© 2026 Nikhil Wavhale. All rights reserved.</p>
          
          <div className="contact-icon-row">
            <a href={`tel:${contactData.phone}`} aria-label="Phone">
              <FaPhone size={22} />
            </a>
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;