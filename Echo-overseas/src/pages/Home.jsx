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

      {/* Success Stories Section */}
      <section className="success-stories section-padding" style={{ backgroundColor: '#f8faff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="subtitle">Student Success Stories</span>
            <h2 className="section-title">Meet Our Success Stories</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '700px', margin: '20px auto' }}>
              Discover how our students achieved their dreams of studying abroad with Eccho Overseas guidance
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Arjun Sharma" />
                <div className="play-button">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="testimonial-content">
                <h4>Arjun Sharma</h4>
                <p className="role">Studying at Stanford University</p>
                <p className="testimonial-text">"Eccho Overseas made my study abroad dream a reality. Their expert guidance helped me get admission to Stanford with a scholarship!"</p>
                <div className="university-badge">
                  <strong>USA</strong>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Priya Patel" />
                <div className="play-button">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="testimonial-content">
                <h4>Priya Patel</h4>
                <p className="role">Studying at Oxford University</p>
                <p className="testimonial-text">"From dreams to reality! The team at Eccho transformed my study abroad journey. Highly recommended for anyone aiming for top universities."</p>
                <div className="university-badge">
                  <strong>UK</strong>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Neha Singh" />
                <div className="play-button">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="testimonial-content">
                <h4>Neha Singh</h4>
                <p className="role">Studying at University of Toronto</p>
                <p className="testimonial-text">"The personalized approach and constant support made all the difference. Eccho Overseas is the best decision I made for my future!"</p>
                <div className="university-badge">
                  <strong>Canada</strong>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Rahul Verma" />
                <div className="play-button">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="testimonial-content">
                <h4>Rahul Verma</h4>
                <p className="role">Studying at University of Melbourne</p>
                <p className="testimonial-text">"Amazing support throughout my application process. I'm grateful for their help in achieving my goal to study in Australia!"</p>
                <div className="university-badge">
                  <strong>Australia</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Echo Overseas */}
      <section className="why-us section-padding">
        <div className="container">
          <div className="flex-between" style={{ gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <span className="subtitle">Why Choose Us</span>
              <h2 className="section-title">Your Trusted Partner in Global Education</h2>
              <p style={{ marginBottom: '20px' }}>
                With over 15 years of experience, Eccho Overseas has built a reputation for excellence in international education consulting.
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
