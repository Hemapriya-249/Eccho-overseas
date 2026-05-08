import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';
import contactImg from '../assets/contact.jpg';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const webhookUrl = 'https://proconscription-rifely-tiffaney.ngrok-free.dev/webhook/Eccho-overseas-storage';
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Failed to submit form');
        alert('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Oops! There was a network error. Please try again later.');
    }
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
            <img src={contactImg} alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
