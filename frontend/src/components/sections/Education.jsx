import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">EDUCATION</h2>
          <div className="section-divider"></div>
        </div>

        <div className="education-timeline">
          {data.map((edu, index) => (
            <div key={edu.id} className="education-item">
              <div className="education-marker">
                <div className="education-dot">
                  <GraduationCap size={16} />
                </div>
                {index < data.length - 1 && <div className="education-line"></div>}
              </div>

              <div className="education-card">
                <div className="education-header">
                  <div className="education-title-section">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-field">{edu.field}</p>
                    <div className="education-institution">
                      <span className="institution-name">{edu.institution}</span>
                    </div>
                  </div>

                  <div className="education-grade">
                    <Award size={16} />
                    <span className="grade-value">{edu.grade}</span>
                  </div>
                </div>

                <div className="education-meta">
                  <div className="education-duration">
                    <Calendar size={14} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="education-location">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="education-achievements">
                    <ul className="achievements-list">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
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

export default Education;