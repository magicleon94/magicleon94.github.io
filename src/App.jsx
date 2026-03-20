import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <Routes>
          <Route path="/" element={<Home openContact={() => setIsContactOpen(true)} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <footer className="glass-footer">
          <p>© {new Date().getFullYear()} Antonello Galipò. Built with React & Vite.</p>
        </footer>
        
        <button onClick={() => setIsContactOpen(true)} className="fab-btn" aria-label="Contact Me">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </Router>
  );
}

export default App;
