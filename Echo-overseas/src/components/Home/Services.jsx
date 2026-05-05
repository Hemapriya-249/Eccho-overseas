import React from 'react';
import { BookOpen, Search, FileText, CheckCircle, Headphones, GraduationCap } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <BookOpen size={40} />,
      title: 'Test Prep',
      desc: 'Expert coaching for GRE, IELTS, TOEFL, PTE, and Duolingo with personalized attention and practice materials.',
      link: '/services/test-prep'
    },
    {
      icon: <Search size={40} />,
      title: 'University Selection',
      desc: 'Helping you choose the right university and course that perfectly fits your profile and career goals.',
      link: '/services/admissions'
    },
    {
      icon: <FileText size={40} />,
      title: 'Admission Guidance',
      desc: 'End-to-end support for your application process, including SOP/LOR editing and university interviews.',
      link: '/services/admissions'
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Visa Assistance',
      desc: 'Meticulous visa documentation and mock interviews to ensure a high success rate for your student visa.',
      link: '/services/admissions'
    },
    {
      icon: <Headphones size={40} />,
      title: 'Post-Landing Support',
      desc: 'Guidance on accommodation, part-time jobs, and networking to help you settle in your new country.',
      link: '/services/admissions'
    },
    {
      icon: <GraduationCap size={40} />,
      title: 'Scholarship Guidance',
      desc: 'Identifying and applying for eligible scholarships to reduce the financial burden of your education.',
      link: '/services/admissions'
    }
  ];

  return (
    <section className="services-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">What We Offer</span>
          <h2 className="section-title">Comprehensive Overseas Education Services</h2>
          <p>We provide a wide range of services to make your study abroad journey smooth and successful.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} className="read-more">Learn More <span>&rarr;</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
