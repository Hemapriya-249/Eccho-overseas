import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Branches.css';

const Branches = () => {
  const branches = [
    {
      city: 'Hyderabad (Main Office)',
      address: 'KPHB, Hyderabad',
      phone: '+91 96583 93393',
      email: 'info@ecchouk.co.uk',
      hours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Bangalore',
      address: 'Koramangala, Bangalore',
      phone: '+91 80XXXXXX30',
      email: 'bangalore@ecchouk.co.uk',
      hours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Delhi',
      address: 'Connaught Place, Delhi',
      phone: '+91 11XXXXXX40',
      email: 'delhi@ecchouk.co.uk',
      hours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Mumbai',
      address: 'Bandra, Mumbai',
      phone: '+91 22XXXXXX50',
      email: 'mumbai@ecchouk.co.uk',
      hours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Pune',
      address: 'Hinjewadi, Pune',
      phone: '+91 20XXXXXX60',
      email: 'pune@ecchouk.co.uk',
      hours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1478694712202-06db1994f042?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Chennai',
      address: 'Nungambakkam, Chennai',
      phone: '+91 44XXXXXX70',
      email: 'chennai@ecchouk.co.uk',
      hours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="branches-page">
      <section className="branches-hero section-padding">
        <div className="container text-center">
          <h1 className="section-title">Our Branches</h1>
          <p className="lead">Find Echo Overseas near you. Visit any of our branches for personalized consultation.</p>
        </div>
      </section>

      <section className="branches-list section-padding">
        <div className="container">
          <div className="branches-grid">
            {branches.map((branch, index) => (
              <div key={index} className="branch-card">
                <div className="branch-image">
                  <img src={branch.image} alt={branch.city} />
                </div>
                <div className="branch-content">
                  <h3>{branch.city}</h3>
                  <div className="branch-info">
                    <div className="info-item">
                      <MapPin size={18} />
                      <span>{branch.address}</span>
                    </div>
                    <div className="info-item">
                      <Phone size={18} />
                      <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                    </div>
                    <div className="info-item">
                      <Mail size={18} />
                      <a href={`mailto:${branch.email}`}>{branch.email}</a>
                    </div>
                    <div className="info-item">
                      <Clock size={18} />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                  <a href={`tel:${branch.phone}`} className="btn btn-secondary" style={{ marginTop: '20px', display: 'block', textAlign: 'center' }}>
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="branches-cta section-padding">
        <div className="container text-center">
          <h2>Can't Visit in Person?</h2>
          <p>Schedule an online consultation with our experts.</p>
          <a href="/counselling" className="btn btn-secondary" style={{ marginTop: '20px' }}>Book Free Online Counselling</a>
        </div>
      </section>
    </div>
  );
};

export default Branches;
