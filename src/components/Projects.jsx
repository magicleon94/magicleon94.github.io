import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <main className="projects-page" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', minHeight: '80vh' }}>
      <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>&larr; Back to Home</Link>
      <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '2rem', color: '#fff' }}>Works & Projects</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Products and experiments.</p>
      
      <div className="timeline">
        <div className="timeline-item glass-panel">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Widiba Banking App</h3>
            <span className="timeline-date">Crispy Bacon Srl</span>
            <p style={{ marginTop: '1rem', color: 'var(--text-primary)', lineHeight: '1.7' }}>
              Lead tech aspects for the Widiba banking app. Bootstrapped the project from scratch as a 2 people team of Flutter developers, developing customized Widgets and business logic structures to meet edge design demands while keeping a maintainable codebase. Brought the app to production in March 2020.
            </p>
          </div>
        </div>

        <div className="timeline-item glass-panel">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>TooA app</h3>
            <span className="timeline-date">Crispy Bacon Srl</span>
            <p style={{ marginTop: '1rem', color: 'var(--text-primary)', lineHeight: '1.7' }}>
              Developed an app interacting via bluetooth with a domestic ice cream machine. Allowed customers to purchase products from a Salesforce eCommerce platform and browse content offered by a Strapi CMS. Actively participated in mentoring junior developers.
            </p>
          </div>
        </div>

        <div className="timeline-item glass-panel">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>A2A Toolbox App</h3>
            <span className="timeline-date">Crispy Bacon Srl</span>
            <p style={{ marginTop: '1rem', color: 'var(--text-primary)', lineHeight: '1.7' }}>
              One man team for the mobile front end of the A2A CityEye platform. The app allows installation personnel to perform operations and queries on IoT sensors all around the territory easily.
            </p>
          </div>
        </div>

      </div>
      <p style={{ marginTop: '2rem', color: 'var(--text-secondary)' }}>And many smaller ones...</p>
    </main>
  );
};

export default Projects;
