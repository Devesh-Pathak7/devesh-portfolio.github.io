import React from 'react';
import { Code, Cloud, Zap, Users } from 'lucide-react';

const About = ({ data }) => {
  const highlights = [
    {
      icon: <Cloud size={24} />,
      title: "Cloud & DevOps",
      description: "Azure DevOps, CI/CD Pipelines, Infrastructure Automation"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance",
      description: "40% faster deployments through optimization"
    },
    {
icon: <Code size={24} />,
      title: "Full-Stack",
      description: "Java, React, Python, Android Development"
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "Cross-functional teams, Agile methodologies"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              {data.summary}
            </p>
            
            <div className="about-details">
              <div className="about-detail">
                <span className="about-label">Location:</span>
                <span className="about-value">{data.location}</span>
              </div>
              <div className="about-detail">
                <span className="about-label">Experience:</span>
                <span className="about-value">1.5+ Years in DevOps</span>
              </div>
              <div className="about-detail">
                <span className="about-label">Education:</span>
                <span className="about-value">B.Tech Computer Science (9.71 CGPA)</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <div className="highlight-content">
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;