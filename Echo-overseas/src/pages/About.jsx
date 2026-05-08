import React from 'react';
import { MapPin, User } from 'lucide-react';
import './About.css';
import contactImg from '../assets/contact.jpg';
import Destinations from '../components/Home/Destinations';

const About = () => {
  const branches = [
    { city: 'Hyderabad (Main Office)', address: 'KPHB, Hyderabad' },
    { city: 'Bangalore', address: 'Koramangala, Bangalore' },
    { city: 'Delhi', address: 'Connaught Place, Delhi' },
    { city: 'Mumbai', address: 'Bandra, Mumbai' },
    { city: 'Pune', address: 'Hinjewadi, Pune' },
    { city: 'Chennai', address: 'Nungambakkam, Chennai' },
    { city: 'Vijayawada', address: 'Dwarakanagar, Vijayawada' },
    { city: 'Kadapa', address: 'Railway Station Road, Kadapa' }
  ];
  return (
    <div className="about-page">
      <section className="about-hero section-padding">
        <div className="container text-center">
          <h1 className="section-title">About</h1>
          <p className="lead">Empowering Students to Achieve Global Success since 2008.</p>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="flex-between" style={{ gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2>Our Story</h2>
              <p>
                Eccho Overseas started with a simple mission: to bridge the gap between ambitious students and world-class education. Over the years, we have grown into one of India's leading overseas education consultancies, with a presence in 21+ cities.
              </p>
              <p>
                Our team of expert counsellors has helped over 25,000 students navigate the complexities of university applications, visa processes, and cultural transitions.
              </p>
            </div>
          </div>
          
          <div className="about-branches-section" style={{ marginTop: '60px' }}>
            <h2 style={{ marginBottom: '30px' }}>Our Branches</h2>
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
        </div>
      </section>

      <Destinations />

      <section className="vision-mission section-padding" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div className="grid-2">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>To be the most trusted global education partner, empowering every student to unlock their full potential on the international stage.</p>
            </div>
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To provide transparent, ethical, and personalized guidance that simplifies the study abroad journey and ensures student success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-separator">
        <div className="marquee">
          <span>"ECCHO Overseas – Guiding your dreams beyond borders. Expert study abroad consulting, personalized career advice, and end-to-end support for your global future."</span>
        </div>
      </section>
    </div>
  );
};

export default About;
