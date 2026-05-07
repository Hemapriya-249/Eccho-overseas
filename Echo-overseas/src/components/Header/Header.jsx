import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X, Search } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container flex-between">
          <div className="top-info">
            <a href="tel:+919658393393"><Phone size={14} /> +91 96583 93393</a>
            <a href="mailto:eccho.kphb@gmail.com"><Mail size={14} /> eccho.kphb@gmail.com</a>
          </div>
          <div className="top-social">
            <a href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            {/* <a href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
            <a href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> */}
            <a href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="header-container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Eccho Overseas" />
          </Link>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            
            <li className="dropdown">
              <Link to="/services">Services <ChevronDown size={14} /></Link>
              <ul className="dropdown-menu">
                <li><Link to="/services/free-counselling" onClick={() => setIsMobileMenuOpen(false)}>Free Counselling</Link></li>
                <li><Link to="/services/test-prep" onClick={() => setIsMobileMenuOpen(false)}>Test Preparation</Link></li>
                <li><Link to="/services/university-selection" onClick={() => setIsMobileMenuOpen(false)}>University Selection</Link></li>
                <li><Link to="/services/admissions" onClick={() => setIsMobileMenuOpen(false)}>Admission Counselling</Link></li>
                <li><Link to="/services/visa-guidance" onClick={() => setIsMobileMenuOpen(false)}>Visa Guidance</Link></li>
                <li><Link to="/services/post-landing-support" onClick={() => setIsMobileMenuOpen(false)}>Pre-Departure Briefing</Link></li>
                <li><Link to="/services/scholarship-guidance" onClick={() => setIsMobileMenuOpen(false)}>Scholarship Assistance</Link></li>
                <li><Link to="/services/loan-assistance" onClick={() => setIsMobileMenuOpen(false)}>Loan Assistance</Link></li>
              </ul>
            </li>

            <li className="dropdown mega-dropdown">
              <Link to="/study-in">Study In <ChevronDown size={14} /></Link>
              <div className="mega-menu">
                <div className="mega-grid">
                  <Link to="/study-in/usa" onClick={() => setIsMobileMenuOpen(false)}>USA</Link>
                  <Link to="/study-in/uk" onClick={() => setIsMobileMenuOpen(false)}>UK</Link>
                  <Link to="/study-in/canada" onClick={() => setIsMobileMenuOpen(false)}>Canada</Link>
                  <Link to="/study-in/australia" onClick={() => setIsMobileMenuOpen(false)}>Australia</Link>
                  <Link to="/study-in/ireland" onClick={() => setIsMobileMenuOpen(false)}>Ireland</Link>
                  <Link to="/study-in/germany" onClick={() => setIsMobileMenuOpen(false)}>Germany</Link>
                </div>
              </div>
            </li>


            <li><Link to="/branches" onClick={() => setIsMobileMenuOpen(false)}>Our Branches</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>

          <div className="nav-actions">

            <Link to="/counselling" className="btn btn-secondary">Book Free Counselling</Link>
            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
