import React, { useState } from 'react';
import { Send, Phone, User, Mail, Globe, BookOpen, Clock } from 'lucide-react';
import './Counselling.css';

const Counselling = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    education: '',
    experience: '',
    intake: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our expert counsellors will contact you shortly.');
  };

  return (
    <div className="counselling-page section-padding">
      <div className="container">
        <div className="counselling-container">
          <div className="counselling-info">
            <h2>Book Your Free <span>Consultation</span></h2>
            <p>Fill out the form and our expert counsellors will help you plan your international education journey.</p>
            
            <div className="info-points">
              <div className="point">
                <Clock size={20} className="icon" />
                <div>
                  <h4>Quick Response</h4>
                  <p>Get a callback within 24 hours.</p>
                </div>
              </div>
              <div className="point">
                <User size={20} className="icon" />
                <div>
                  <h4>Expert Guidance</h4>
                  <p>Talk to certified education consultants.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="counselling-form-card">
            <div className="step-indicator">
              <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
              <div className="line"></div>
              <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
              <div className="line"></div>
              <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="form-step animate-fade-in">
                  <h3>Personal Details</h3>
                  <div className="input-group">
                    <User size={18} className="input-icon" />
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="input-group">
                    <Mail size={18} className="input-icon" />
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="input-group">
                    <Phone size={18} className="input-icon" />
                    <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={nextStep}>Next Step</button>
                </div>
              )}

              {step === 2 && (
                <div className="form-step animate-fade-in">
                  <h3>Academic Details</h3>
                  <div className="input-group">
                    <BookOpen size={18} className="input-icon" />
                    <select name="education" value={formData.education} onChange={handleChange} required>
                      <option value="">Current Education</option>
                      <option value="12th">12th Standard</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <Clock size={18} className="input-icon" />
                    <select name="experience" value={formData.experience} onChange={handleChange} required>
                      <option value="">Work Experience</option>
                      <option value="0">Fresher</option>
                      <option value="1-2">1-2 Years</option>
                      <option value="3+">3+ Years</option>
                    </select>
                  </div>
                  <div className="form-btns">
                    <button type="button" className="btn btn-outline" onClick={prevStep}>Back</button>
                    <button type="button" className="btn btn-primary" onClick={nextStep}>Next Step</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step animate-fade-in">
                  <h3>Preferences</h3>
                  <div className="input-group">
                    <Globe size={18} className="input-icon" />
                    <select name="destination" value={formData.destination} onChange={handleChange} required>
                      <option value="">Preferred Destination</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <Clock size={18} className="input-icon" />
                    <select name="intake" value={formData.intake} onChange={handleChange} required>
                      <option value="">Preferred Intake</option>
                      <option value="fall">Fall (Sep/Oct)</option>
                      <option value="spring">Spring (Jan/Feb)</option>
                      <option value="summer">Summer (May/Jun)</option>
                    </select>
                  </div>
                  <div className="form-btns">
                    <button type="button" className="btn btn-outline" onClick={prevStep}>Back</button>
                    <button type="submit" className="btn btn-secondary">Submit Request <Send size={18} /></button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselling;
