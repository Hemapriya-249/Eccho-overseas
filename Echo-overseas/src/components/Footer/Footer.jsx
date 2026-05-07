import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="container">
          <div className="footer-grid">
            {/* ABOUT US */}
            <div className="footer-col">
              <Link to="/" className="footer-logo-link">
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* STUDY ABROAD */}
            <div className="footer-col">
              <h3>STUDY ABROAD</h3>
              <ul className="footer-links">
                <li><Link to="/study-in/uk">STUDY IN UK</Link></li>
                <li><Link to="/study-in/ireland">STUDY IN IRELAND</Link></li>
                <li><Link to="/study-in/canada">STUDY IN CANADA</Link></li>
                <li><Link to="/study-in/usa">STUDY IN USA</Link></li>
                <li><Link to="/study-in/australia">STUDY IN AUSTRALIA</Link></li>
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
            <Link to="/privacy">Privacy & Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms & Conditions of Use</Link>
          </div>

          <div className="social-icons">
            <a href="#" className="social-btn facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-btn whatsapp">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
            </a>
            {/* <a href="#" className="social-btn twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
            </a>
            <a href="#" className="social-btn instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.776 6.981 6.976 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.776-2.618 6.976-6.981.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.776-6.981-6.976C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
