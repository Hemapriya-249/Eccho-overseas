import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>The World is Emerging with Novelty Come and Experience with US</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <span>Home</span>
          <span className="separator">›</span>
          <span className="active">Contact Us</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding container">
        <div className="contact-content">
          {/* Form Section */}
          <div className="contact-form-section">
            <h2>Get in <span>Touch</span></h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">SUBMIT NOW</button>
            </form>
          </div>

          {/* Image Section */}
          <div className="contact-image-section">
            <img src="https://images.unsplash.com/photo-1460925895917-aeb19be489c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
