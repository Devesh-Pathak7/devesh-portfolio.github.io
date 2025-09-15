import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-name">{data.name}</h3>
            <p className="footer-title">{data.title}</p>
            <p className="footer-tagline">{data.tagline}</p>
          </div>

          <div className="footer-contact">
            <h4 className="footer-section-title">GET IN TOUCH</h4>
            <div className="footer-links">
              <a href={`mailto:${data.email}`} className="footer-link">
                <Mail size={18} />
                <span>{data.email}</span>
              </a>
              <a href={`tel:${data.phone}`} className="footer-link">
                <Phone size={18} />
                <span>{data.phone}</span>
              </a>
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="footer-location">
            <h4 className="footer-section-title">LOCATION</h4>
            <p className="footer-text">{data.location}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} {data.name}. All rights reserved.</p>
            <p className="footer-built">Built with passion and precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;