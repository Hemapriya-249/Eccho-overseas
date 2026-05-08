import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, GraduationCap, MapPin } from 'lucide-react';
import './CountryDetail.css';

const CountryDetail = () => {
  const { country } = useParams();
  
  const countryData = {
    usa: {
      name: 'USA',
      heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      description: 'The United States of America remains the most popular destination for international students, offering a diverse range of institutions and world-class education.',
      features: ['World Class Universities', 'Flexible Education System', 'Post-Study Work Options', 'Diverse Culture']
    },
    uk: {
      name: 'UK',
      heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      description: 'The UK is home to some of the world\'s oldest and most prestigious universities, offering globally recognized degrees and a rich cultural experience.',
      features: ['Prestigious Degrees', 'Short Duration Courses', 'Work while Study', 'Rich Heritage']
    },
    canada: {
      name: 'Canada',
      heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      description: 'Canada is known for its high-quality education, affordable tuition fees, and excellent post-graduation work and immigration opportunities.',
      features: ['High Quality Education', 'Affordable Living', 'Safe Environment', 'PR Opportunities']
    }
  };

  const data = countryData[country] || countryData['usa'];

  return (
    <div className="country-detail">
      <section className="country-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${data.heroImage})` }}>
        <div className="container">
          <h1>Study in {data.name}</h1>
          <p>{data.description}</p>
        </div>
      </section>

      <section className="country-info section-padding">
        <div className="container">
          <div className="flex-between" style={{ gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1.2', minWidth: '300px' }}>
              <h2>Why Study in {data.name}?</h2>
              <div className="features-list">
                {data.features.map((f, i) => (
                  <div key={i} className="feature-item">
                    <CheckCircle size={20} color="var(--secondary)" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '30px' }}>
                We provide comprehensive assistance for {data.name} including university shortlisting, application processing, scholarship guidance, and visa interview preparation.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '30px' }}>Get Free Consultation</Link>
            </div>
            
            <div className="sidebar" style={{ flex: '0.8', minWidth: '300px' }}>
              <div className="cta-box">
                <h3>Interested in {data.name}?</h3>
                <p>Our experts can help you get started with your application today.</p>
                <div className="input-mini">
                   <input type="text" placeholder="Your Phone Number" />
                   <button className="btn btn-secondary">Request Callback</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetail;
