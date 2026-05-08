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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container flex-between">
          <div className="top-info">
            <a href="tel:+919658393393"><Phone size={14} /> +91 96583 93393</a>
            <a href="mailto:eccho.kphb@gmail.com"><Mail size={14} /> eccho.kphb@gmail.com</a>
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
            <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavClick}>About</Link></li>
            
            <li className="dropdown">
              <Link to="/services">Services <ChevronDown size={14} /></Link>
              <ul className="dropdown-menu">
                <li><Link to="/services/free-counselling" onClick={handleNavClick}>Free Counselling</Link></li>
                <li><Link to="/services/test-prep" onClick={handleNavClick}>Test Preparation</Link></li>
                <li><Link to="/services/university-selection" onClick={handleNavClick}>University Selection</Link></li>
                <li><Link to="/services/admissions" onClick={handleNavClick}>Admission Counselling</Link></li>
                <li><Link to="/services/visa-guidance" onClick={handleNavClick}>Visa Guidance</Link></li>
                <li><Link to="/services/post-landing-support" onClick={handleNavClick}>Pre-Departure Briefing</Link></li>
                <li><Link to="/services/scholarship-guidance" onClick={handleNavClick}>Scholarship Assistance</Link></li>
                <li><Link to="/services/loan-assistance" onClick={handleNavClick}>Loan Assistance</Link></li>
              </ul>
            </li>

            <li className="dropdown mega-dropdown">
              <Link to="/study-in" onClick={handleNavClick}>Study In <ChevronDown size={14} /></Link>
              <div className="mega-menu">
                <div className="mega-grid">
                  <Link to="/study-in/usa" onClick={handleNavClick}>USA</Link>
                  <Link to="/study-in/uk" onClick={handleNavClick}>UK</Link>
                  <Link to="/study-in/canada" onClick={handleNavClick}>Canada</Link>
                  <Link to="/study-in/australia" onClick={handleNavClick}>Australia</Link>
                  <Link to="/study-in/ireland" onClick={handleNavClick}>Ireland</Link>
                  <Link to="/study-in/germany" onClick={handleNavClick}>Germany</Link>
                </div>
              </div>
            </li>



            <li><Link to="/gallery" onClick={handleNavClick}>Gallery</Link></li>
            <li><Link to="/contact" onClick={handleNavClick}>Contact Us</Link></li>
          </ul>

          <div className="nav-actions">

            <Link to="/contact" className="btn btn-secondary">Book Free Counselling</Link>
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
