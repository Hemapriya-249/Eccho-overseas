import React, { useState, useEffect } from 'react';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import Services from '../components/Home/Services';
import Destinations from '../components/Home/Destinations';

import img5 from '../assets/Echoo-overseas -photos/5.jpeg';
import img6 from '../assets/Echoo-overseas -photos/6.jpeg';
import img2 from '../assets/Echoo-overseas -photos/2.jpeg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderImages = [img5, img6, img2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);
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
          <a href="/contact" className="btn btn-secondary">Book Free Counselling Now</a>
        </div>
      </section>

      <Destinations />

      {/* Photo Slider Section */}
      <section className="photo-slider section-padding" style={{ backgroundColor: '#f8faff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="subtitle">Gallery</span>
            <h2 className="section-title">Life at Campus</h2>
          </div>
          
          <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto', overflow: 'hidden', borderRadius: '24px', aspectRatio: '16/9', boxShadow: 'var(--shadow-lg)' }}>
            {sliderImages.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Campus Life ${index + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  opacity: currentSlide === index ? 1 : 0, 
                  transition: 'opacity 0.8s ease-in-out',
                  zIndex: currentSlide === index ? 1 : 0
                }} 
              />
            ))}
            
            <button 
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))}
              style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.8)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: 'var(--primary)', fontSize: '24px' }}
              aria-label="Previous Slide"
            >
              &#8592;
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))}
              style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.8)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: 'var(--primary)', fontSize: '24px' }}
              aria-label="Next Slide"
            >
              &#8594;
            </button>

            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 10 }}>
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentSlide === index ? 'var(--primary)' : 'rgba(255,255,255,0.6)',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Echo Overseas */}
      <section className="why-us section-padding">
        <div className="container">
          <div className="flex-between" style={{ gap: 'clamp(30px, 5vw, 60px)', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: 'min(100%, 300px)' }}>
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
            <div style={{ flex: '1', minWidth: 'min(100%, 300px)' }}>
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" alt="Consultation" style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
