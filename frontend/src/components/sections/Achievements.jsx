import React from 'react';
import { Trophy, Star, Award, Target } from 'lucide-react';

const Achievements = ({ data }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'Competition': return <Trophy size={20} />;
      case 'Professional': return <Target size={20} />;
      case 'Publication': return <Star size={20} />;
      default: return <Award size={20} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Competition': return 'achievement-competition';
      case 'Professional': return 'achievement-professional';
      case 'Publication': return 'achievement-publication';
      default: return 'achievement-default';
    }
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="section-divider"></div>
        </div>

        <div className="achievements-grid">
          {data.map((achievement) => (
            <div key={achievement.id} className={`achievement-card ${getTypeColor(achievement.type)}`}>
              <div className="achievement-icon">
                {getIcon(achievement.type)}
              </div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                
                <div className="achievement-meta">
                  <span className="achievement-year">{achievement.year}</span>
                  <span className="achievement-type-label">{achievement.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">2nd</span>
              <span className="stat-label">National Competition Rank</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40%</span>
              <span className="stat-label">Performance Improvement</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">9.71</span>
              <span className="stat-label">Academic CGPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;