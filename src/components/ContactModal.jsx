import React from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Contact Me</h2>
        <p>Feel free to reach out via any of the channels below:</p>
        <div className="modal-links">
          <a href="mailto:antonello.galipo@gmail.com" className="btn btn-secondary">Email</a>
          <a href="https://www.linkedin.com/in/antonello-galipò/" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
          <a href="https://github.com/magicleon94" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub</a>
          <a href="https://medium.com/@magicleon94" target="_blank" rel="noreferrer" className="btn btn-secondary">Medium</a>
          <a href="https://instagram.com/magicleon94" target="_blank" rel="noreferrer" className="btn btn-secondary">Instagram</a>
          <a href="https://stackoverflow.com/users/3626078/magicleon94" target="_blank" rel="noreferrer" className="btn btn-secondary">StackOverflow</a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
