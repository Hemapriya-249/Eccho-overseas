import React from 'react';
import { Users, GraduationCap, Globe, Award } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { icon: <Users size={30} />, value: '25,000+', label: 'Students Counselled' },
    { icon: <Award size={30} />, value: '15,000+', label: 'Visas Issued' },
    { icon: <GraduationCap size={30} />, value: '500+', label: 'Partner Universities' },
    { icon: <Globe size={30} />, value: '21+', label: 'Branches Pan India' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
