import React from 'react';
import ProfileCard from './ProfileCard';
import Experience from './Experience';
import './Home.css';

const Home = ({ openContact }) => {
  return (
    <main className="home-layout">
      <div className="left-column">
        <ProfileCard openContact={openContact} />
      </div>
      <div className="right-column">
        <Experience />
      </div>
    </main>
  );
};

export default Home;
