import React from 'react';
import { Server, Code, Database, Wrench, Layers, Globe } from 'lucide-react';

const Skills = ({ data }) => {
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: <Server size={24} />,
      skills: data.devops,
      color: "category-devops"
    },
    {
      title: "Programming",
      icon: <Code size={24} />,
      skills: data.programming,
      color: "category-programming"
    },
    {
      title: "Frontend",
      icon: <Globe size={24} />,
      skills: data.frontend,
      color: "category-frontend"
    },
    {
      title: "Backend",
      icon: <Layers size={24} />,
      skills: data.backend,
      color: "category-backend"
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: data.databases,
      color: "category-database"
    },
    {
      title: "Tools & Others",
      icon: <Wrench size={24} />,
      skills: data.tools,
      color: "category-tools"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">SKILLS & EXPERTISE</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category ${category.color}`}>
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="skills-highlight">
            <h3 className="skills-highlight-title">Core Strengths</h3>
            <div className="skills-strengths">
              <div className="strength-item">
                <span className="strength-label">DevOps Automation</span>
                <div className="strength-bar">
                  <div className="strength-fill" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="strength-item">
                <span className="strength-label">CI/CD Pipelines</span>
                <div className="strength-bar">
                  <div className="strength-fill" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="strength-item">
                <span className="strength-label">Full-Stack Development</span>
                <div className="strength-bar">
                  <div className="strength-fill" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="strength-item">
                <span className="strength-label">Cloud Infrastructure</span>
                <div className="strength-bar">
                  <div className="strength-fill" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;