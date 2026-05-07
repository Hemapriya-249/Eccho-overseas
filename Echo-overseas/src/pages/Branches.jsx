import React from 'react';
import { MapPin, User } from 'lucide-react';
import './Branches.css';

const Branches = () => {
  const branches = [
    {
      city: 'Hyderabad (Main Office)',
      address: 'KPHB, Hyderabad'
    },
    {
      city: 'Bangalore',
      address: 'Koramangala, Bangalore'
    },
    {
      city: 'Delhi',
      address: 'Connaught Place, Delhi'
    },
    {
      city: 'Mumbai',
      address: 'Bandra, Mumbai'
    },
    {
      city: 'Pune',
      address: 'Hinjewadi, Pune'
    },
    {
      city: 'Chennai',
      address: 'Nungambakkam, Chennai'
    },
    {
      city: 'Vijayawada',
      address: 'Dwarakanagar, Vijayawada'
    },
    {
      city: 'Kadapa',
      address: 'Railway Station Road, Kadapa'
    }
  ];

  return (
    <div className="branches-page">
      <section className="branches-hero section-padding">
        <div className="container text-center">
          <h1 className="section-title">Our Branches</h1>
          <p className="lead">Find Eccho Overseas near you. Visit any of our branches for personalized consultation.</p>
        </div>
      </section>

      <section className="branches-list section-padding">
        <div className="container">
          <div className="branches-grid">
            {branches.map((branch, index) => (
              <div key={index} className="branch-card">
                <div className="branch-card-header">
                  <User size={24} className="branch-icon" />
                </div>
                <div className="branch-content">
                  <h3>{branch.city}</h3>
                  <div className="branch-info">
                    <div className="info-item">
                      <MapPin size={16} />
                      <span>{branch.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="branches-cta section-padding">
        <div className="container text-center">
          <h2>Can't Visit in Person?</h2>
          <p>Schedule an online consultation with our experts.</p>
          <a href="/counselling" className="btn btn-secondary" style={{ marginTop: '20px' }}>Book Free Online Counselling</a>
        </div>
      </section>
    </div>
  );
};

export default Branches;
