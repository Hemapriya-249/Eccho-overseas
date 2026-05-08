import React from 'react';
import Destinations from '../components/Home/Destinations';
import './About.css'; // Just using About's hero styling if we need a hero, but we'll use inline or global classes

const StudyIn = () => {
  return (
    <div className="study-in-page" style={{ paddingTop: 'var(--header-height)' }}>
      <section className="about-hero section-padding" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <h1 className="section-title" style={{ color: 'white' }}>Study In</h1>
          <p className="lead" style={{ color: 'white' }}>Global Destinations to Explore</p>
        </div>
      </section>

      <Destinations />
    </div>
  );
};

export default StudyIn;
