import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="container">
          <div className="footer-grid">
            {/* ABOUT US */}
            <div className="footer-col">
              <Link to="/" className="footer-logo-link" onClick={handleLinkClick}>
                <img src="/logo.png" alt="Eccho Overseas" className="footer-logo-img" />
              </Link>
              <h3>ABOUT US</h3>
              <p className="footer-desc">
                Eccho Overseas is an international consultancy offering assistance to students wishing to pursue further education overseas and career advise that enables people to make choices for advancing a successful career.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>KPHB, Hyderabad</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>eccho.kphb@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+91 96583 93393</span>
                </div>
              </div>
            </div>

            {/* QUICK LINK */}
            <div className="footer-col">
              <h3>QUICK LINK</h3>
              <ul className="footer-links">
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
                <li><Link to="/services" onClick={handleLinkClick}>SERVICES</Link></li>
                <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
                <li><Link to="/terms" onClick={handleLinkClick}>Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* STUDY ABROAD */}
            <div className="footer-col">
              <h3>STUDY ABROAD</h3>
              <ul className="footer-links">
                <li><Link to="/study-in/uk" onClick={handleLinkClick}>STUDY IN UK</Link></li>
                <li><Link to="/study-in/ireland" onClick={handleLinkClick}>STUDY IN IRELAND</Link></li>
                <li><Link to="/study-in/canada" onClick={handleLinkClick}>STUDY IN CANADA</Link></li>
                <li><Link to="/study-in/usa" onClick={handleLinkClick}>STUDY IN USA</Link></li>
                <li><Link to="/study-in/australia" onClick={handleLinkClick}>STUDY IN AUSTRALIA</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <button className="back-to-top" onClick={scrollToTop}>
          <ChevronUp size={24} />
        </button>
      </div>

      <div className="footer-bottom">
        <div className="container flex-between">
          <div className="copyright">
            Copyright © Eccho Overseas . All Right Reserved.
          </div>
          
          <div className="bottom-links">
            <Link to="/privacy" onClick={handleLinkClick}>Privacy & Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms" onClick={handleLinkClick}>Terms & Conditions of Use</Link>
          </div>

          <div className="social-icons">
            <a href="#" className="social-btn facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-btn instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.776 6.981 6.976 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.776-2.618 6.976-6.981.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.776-6.981-6.976C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
