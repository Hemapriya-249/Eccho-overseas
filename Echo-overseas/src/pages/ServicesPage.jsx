import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, Search, FileText, CheckCircle, Headphones, GraduationCap } from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {
  const { id } = useParams();

  const admissionContent = {
    title: 'Admission Counselling',
    desc: 'We evaluate your profile and suggest the best universities and courses you are eligible for. We help you with all required documents, applications, and personalized guidance — including financial counselling and statement preparation — to make your admissions process smooth and successful.',
  };

  const services = [
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
      desc: admissionContent.desc,
    },
    {
      icon: <FileText size={40} />,
      title: 'Admission Assistance',
      slug: 'admissions',
      desc: admissionContent.desc,
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Visa Guidance',
      slug: 'visa-guidance',
      desc: admissionContent.desc,
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
  ];

  const serviceRoutes = {
    'test-prep': services[0],
    'university-selection': { title: admissionContent.title, desc: admissionContent.desc },
    'admissions': { title: admissionContent.title, desc: admissionContent.desc },
    'visa-guidance': { title: admissionContent.title, desc: admissionContent.desc },
    'post-landing-support': services[4],
    'scholarship-guidance': services[5],
  };

  const selectedService = id ? serviceRoutes[id] : null;

  return (
    <div className="services-page">
      <section className="services-hero section-padding">
        <div className="container text-center">
          <h1 className="section-title">Our Expert Services</h1>
          <p className="lead">Comprehensive support for every step of your international education journey.</p>
        </div>
      </section>

      {selectedService ? (
        <section className="service-detail-view section-padding">
          <div className="container">
            <Link to="/services" className="back-link">← Back to all services</Link>
            <div className="service-detail-card single">
              <div className="service-detail-content">
                <h2>{selectedService.title}</h2>
                <p>{selectedService.desc}</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="services-list section-padding">
          <div className="container">
            <div className="services-full-grid">
              {services.map((service, index) => (
                <Link key={index} to={`/services/${service.slug}`} className="service-detail-card service-link">
                  <div className="service-detail-icon">{service.icon}</div>
                  <div className="service-detail-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="services-cta section-padding">
        <div className="container text-center">
          <h2>Need Personalized Advice?</h2>
          <p>Book a free session with our counsellors today.</p>
          <a href="/counselling" className="btn btn-secondary" style={{ marginTop: '20px' }}>Book Free Counselling</a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
