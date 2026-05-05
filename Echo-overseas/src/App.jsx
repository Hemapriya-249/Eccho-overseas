import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Branches from './pages/Branches';
import Counselling from './pages/Counselling';
import CountryDetail from './pages/CountryDetail';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import './App.css';

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
            <Route path="/study-in/:country" element={<CountryDetail />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/counselling" element={<Counselling />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Action */}
        <a href="https://wa.me/919658393393" className="floating-whatsapp" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
      </div>
    </Router>
  );
}

export default App;
