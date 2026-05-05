import React from 'react';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import Services from '../components/Home/Services';
import Destinations from '../components/Home/Destinations';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      
      {/* CTA Section */}
      <section className="cta-section section-padding" style={{ backgroundColor: '#f8faff' }}>
        <div className="container text-center">
          <h2 className="section-title">Ready to Start Your Journey?</h2>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: '#64748b' }}>
            Book a free consultation session with our expert counsellors today.
          </p>
          <a href="/counselling" className="btn btn-secondary">Book Free Counselling Now</a>
        </div>
      </section>

      <Destinations />

      {/* Why Echo Overseas */}
      <section className="why-us section-padding">
        <div className="container">
          <div className="flex-between" style={{ gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <span className="subtitle">Why Choose Us</span>
              <h2 className="section-title">Your Trusted Partner in Global Education</h2>
              <p style={{ marginBottom: '20px' }}>
                With over 15 years of experience, Echo Overseas has built a reputation for excellence in international education consulting.
              </p>
              <ul style={{ display: 'grid', gap: '15px' }}>
                <li style={{ display: 'flex', gap: '10px', fontWeight: '600' }}>
                  <span style={{ color: 'var(--secondary)' }}>✓</span> 100% Admission Success Rate
                </li>
                <li style={{ display: 'flex', gap: '10px', fontWeight: '600' }}>
                  <span style={{ color: 'var(--secondary)' }}>✓</span> Personalized Career Guidance
                </li>
                <li style={{ display: 'flex', gap: '10px', fontWeight: '600' }}>
                  <span style={{ color: 'var(--secondary)' }}>✓</span> Direct Tie-ups with 500+ Universities
                </li>
                <li style={{ display: 'flex', gap: '10px', fontWeight: '600' }}>
                  <span style={{ color: 'var(--secondary)' }}>✓</span> Post-Landing Assistance Globally
                </li>
              </ul>
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" alt="Consultation" style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
