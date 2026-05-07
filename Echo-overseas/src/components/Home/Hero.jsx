import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content container">
        <div className="hero-text animate-fade-in">
          <span className="hero-subtitle">Transforming Dreams Into Reality</span>
          <h1>Expert Guidance for Your <span>Global Education</span> Journey</h1>
          <p>
            Join thousands of successful students who have achieved their dreams of studying in top global universities with Eccho Overseas.
          </p>
          
          <div className="hero-features">
            <div className="feature">
              <CheckCircle size={18} className="icon" />
              <span>Personalized Counselling</span>
            </div>
            <div className="feature">
              <CheckCircle size={18} className="icon" />
              <span>100% Visa Assistance</span>
            </div>
            <div className="feature">
              <CheckCircle size={18} className="icon" />
              <span>Expert Test Prep</span>
            </div>
          </div>

          <div className="hero-btns">
            <a href="/counselling" className="btn btn-secondary">Get Started Now <ArrowRight size={18} /></a>
            <a href="/about" className="btn btn-outline">Explore More</a>
          </div>
        </div>

        <div className="hero-image animate-fade-in">
          <div className="image-wrapper">
             <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Students studying" />
             <div className="floating-card stat-card">
                <h4>21+</h4>
                <p>Branches Pan India</p>
             </div>
             <div className="floating-card success-card">
                <h4>15k+</h4>
                <p>Visas Issued</p>
             </div>
          </div>
        </div>
      </div>

      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
