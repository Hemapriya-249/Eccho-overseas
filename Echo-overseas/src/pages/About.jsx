import React from 'react';
import './About.css';

const About = () => {
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
        </div>
      </section>

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
