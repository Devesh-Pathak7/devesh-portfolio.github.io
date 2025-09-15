import React from 'react';
import { Download, Mail, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = ({ data }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            DEVESH<br />
            PATHAK
          </h1>
          <div className="hero-subtitle">
            <h2 className="hero-role">{data.title}</h2>
            <p className="hero-tagline">{data.tagline}</p>
          </div>
          
          <div className="hero-actions">
            <Button 
              onClick={scrollToContact}
              className="btn-primary hero-btn"
            >
              <Mail size={18} />
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              className="btn-secondary hero-btn"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download size={18} />
              Download Resume
            </Button>
          </div>

          <div className="hero-social">
            <a 
              href={data.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">1.5+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">20+</span>
            <span className="hero-stat-label">Projects Deployed</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">40%</span>
            <span className="hero-stat-label">Deployment Efficiency</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;