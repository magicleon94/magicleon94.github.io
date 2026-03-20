import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="timeline">
          
          <div className="timeline-item glass-panel">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Competence Lead</h3>
              <h4>Klarna</h4>
              <span className="timeline-date">January 2022 - Present</span>
              <div className="experience-details">
                <h5>March 2023 - Present: *********** Team</h5>
                <p>
                  Working as a Lead engineer in a new team responsible for an unreleased feature. The feature involves extensive work using LLMs in a scalable and cost-reduced way. Main tech involves TypeScript (Backend, React/React Native), advanced web scraping, OpenAI stack (prompt engineering), and Python for image processing.
                </p>
                <h5>January 2022 - March 2023: Web Automation Core</h5>
                <p>
                  Full stack developer for the Core team, providing automation functionalities for the Browser And Automation Group. Maintained core libraries for web scraping and APIs to interact with pages. Handled low-level scraping to database storage.
                </p>
              </div>
              <div className="tech-stack">
                <span>TypeScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>LLMs / OpenAI</span>
                <span>Python</span>
              </div>
            </div>
          </div>

          <div className="timeline-item glass-panel">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Senior Flutter Developer</h3>
              <h4>Crispy Bacon Srl</h4>
              <span className="timeline-date">March 2019 - November 2021</span>
              <div className="experience-details">
                <p>Lead Flutter Developer executing projects from scratch to production. Mentored junior developers and built highly customized mobile applications integrating IoT, Bluetooth, and complex banking features.</p>
              </div>
              <div className="tech-stack">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Bluetooth</span>
                <span>Mobile Development</span>
              </div>
            </div>
          </div>

          <div className="timeline-item glass-panel">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Yogamilan App</h3>
              <h4>Freelance</h4>
              <span className="timeline-date">2019 - 2020</span>
              <div className="experience-details">
                <p>Freelance work involving the development of an application for the Yoga studio I currently practice to. The app allows the user to check notifications, Facebook feed from the studio, see available lessons and manage their bookings. Developed with Flutter and published to both Play Store and App Store.</p>
              </div>
              <div className="tech-stack">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Mobile Development</span>
              </div>
            </div>
          </div>

          <div className="timeline-item glass-panel">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Android & Full Stack Developer</h3>
              <h4>Ubiquicom Srl</h4>
              <span className="timeline-date">November 2017 - March 2019</span>
              <div className="experience-details">
                <p>Worked on TrackVision, a cloud-connected system for 360° diagnostics of industrial vehicles. Built an Android companion app for spatial calibrations and maintained the Full-Stack TrackVision Web Application used for data access and configuration.</p>
              </div>
              <div className="tech-stack">
                <span>Android</span>
                <span>Java</span>
                <span>Full Stack</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
