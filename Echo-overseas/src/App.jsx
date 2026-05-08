import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';

import CountryDetail from './pages/CountryDetail';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import StudyIn from './pages/StudyIn';
import Gallery from './pages/Gallery';
import './App.css';

const message = `Hello Eccho Overseas! 👋

I'm interested in your free consultation for studying abroad.

Please get in touch with me at your earliest convenience.

Thank you!`;

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServicesPage />} />
            <Route path="/study-in" element={<StudyIn />} />
            <Route path="/study-in/:country" element={<CountryDetail />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Action */}
        <a href={`https://wa.me/919658393393?text=${encodeURIComponent(message)}`} className="floating-whatsapp" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
      </div>
    </Router>
  );
}

export default App;
