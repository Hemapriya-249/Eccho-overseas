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
    
    // 1. Immediately show success message
    alert('Thank you! Your message has been sent successfully. The team will reach out to you soon.');
    
    // 2. Save data to send before clearing state
    const dataToSend = { ...formData };
    
    // 3. Clear the form immediately
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // 4. Try to trigger the webhook in the background without affecting the user experience
    const webhookUrl = 'https://proconscription-rifely-tiffaney.ngrok-free.dev/webhook/Eccho-overseas-storage';
    try {
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      }).catch(err => {
        console.log('Webhook failed (expected if n8n is offline):', err);
      });
    } catch (error) {
      console.log('Error initiating fetch:', error);
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
