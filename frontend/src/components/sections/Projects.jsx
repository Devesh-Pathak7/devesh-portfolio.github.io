import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '../ui/button';

const Projects = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(data.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'all' 
    ? data 
    : data.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'status-published';
      case 'Production': return 'status-production';
      case 'Completed': return 'status-completed';
      default: return 'status-default';
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-filters">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="filter-btn"
            >
              {category === 'all' ? 'All Projects' : category}
            </Button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-year">
                      <Calendar size={14} />
                      {project.year}
                    </span>
                    <span className={`project-status ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="project-category">
                  <Tag size={14} />
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.playStoreLink && (
                  <div className="project-actions">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.playStoreLink, '_blank')}
                      className="project-btn"
                    >
                      <ExternalLink size={16} />
                      View on Play Store
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;