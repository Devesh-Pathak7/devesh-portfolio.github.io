import React from 'react';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="section-divider"></div>
        </div>

        <div className="experience-timeline">
          {data.map((job, index) => (
            <div key={job.id} className="experience-item">
              <div className="experience-marker">
                <div className="experience-dot"></div>
                {index < data.length - 1 && <div className="experience-line"></div>}
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{job.title}</h3>
                    <div className="experience-company">
                      <Building size={16} />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <div className="experience-duration">
                      <Calendar size={16} />
                      <span>{job.duration}</span>
                    </div>
                    <div className="experience-location">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <span className="experience-type">{job.type}</span>
                  </div>
                </div>

                <div className="experience-achievements">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        <ChevronRight size={14} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;