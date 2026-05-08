import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, FileText, CheckCircle, Headphones, GraduationCap, Gift, Landmark, ChevronDown } from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Gift size={40} />,
      title: 'Free Counselling',
      slug: 'free-counselling',
      desc: 'Get started with a free consultation session with our experienced education counsellors. Discuss your study goals, career aspirations, and explore your options for studying abroad.',
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Test Preparation',
      slug: 'test-prep',
      desc: 'Expert coaching for GRE, IELTS, TOEFL, PTE, and Duolingo. Our certified trainers provide personalized attention and proven strategies to help you achieve your target scores.',
    },
    {
      icon: <Search size={40} />,
      title: 'University Selection',
      slug: 'university-selection',
      desc: 'We evaluate your profile and suggest the best universities and courses you are eligible for. We help you with all required documents, applications, and personalized guidance to make your admissions process smooth and successful.',
    },
    {
      icon: <FileText size={40} />,
      title: 'Admission Counselling',
      slug: 'admissions',
      desc: 'We evaluate your profile and suggest the best universities and courses you are eligible for. We help you with all required documents, applications, and personalized guidance — including financial counselling and statement preparation — to make your admissions process smooth and successful.',
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Visa Guidance',
      slug: 'visa-guidance',
      desc: 'Expert guidance through the complete visa application process. We help you understand requirements, prepare documentation, and confidently navigate the interview process.',
    },
    {
      icon: <Headphones size={40} />,
      title: 'Pre-Departure Briefing',
      slug: 'post-landing-support',
      desc: 'We prepare you for life abroad, covering everything from travel arrangements and insurance to cultural adjustment and academic expectations.',
    },
    {
      icon: <GraduationCap size={40} />,
      title: 'Scholarship Assistance',
      slug: 'scholarship-guidance',
      desc: 'Education is an investment. We help you identify and apply for various merit-based and need-based scholarships to ease the financial burden.',
    },
    {
      icon: <Landmark size={40} />,
      title: 'Loan Assistance',
      slug: 'loan-assistance',
      desc: 'We help you secure education loans with flexible terms and competitive interest rates. Our team guides you through the entire loan process with partner institutions.',
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero section-padding">
        <div className="container text-center">
          <h1 className="section-title">Our Expert Services</h1>
          <p className="lead">Comprehensive support for every step of your international education journey.</p>
        </div>
      </section>

      <section className="services-list section-padding">
        <div className="container">
          <div className="services-dropdown-wrapper">
            <div className="services-dropdown">
              <label htmlFor="service-select">Select a Service:</label>
              <div className="dropdown-container">
                <select 
                  id="service-select"
                  value={selectedService || ''} 
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="services-select"
                >
                  <option value="">-- Choose a Service --</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedService && (
              <div className="service-detail-view">
                {services
                  .filter(s => s.slug === selectedService)
                  .map((service, index) => (
                    <div key={index} className="service-detail-card">
                      <div className="service-detail-icon">{service.icon}</div>
                      <div className="service-detail-content">
                        <h2>{service.title}</h2>
                        <p>{service.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <h2 className="all-services-title">All Services</h2>
          <div className="services-full-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-detail-card service-card-item"
                onClick={() => setSelectedService(service.slug)}
              >
                <div className="service-detail-icon">{service.icon}</div>
                <div className="service-detail-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta section-padding">
        <div className="container text-center">
          <h2>Need Personalized Advice?</h2>
          <p>Book a free session with our counsellors today.</p>
          <a href="/contact" className="btn btn-secondary" style={{ marginTop: '20px' }}>Book Free Counselling</a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
