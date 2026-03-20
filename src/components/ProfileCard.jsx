import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ openContact }) => {
  return (
    <div className="profile-content">
      <div className="profile-header">
        <img 
          src="/profile.jpg" 
          alt="Antonello Galipò" 
          className="avatar-image"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Antonello+Galipò&background=38bdf8&color=fff&size=128"; }}
        />
        <div className="profile-info">
          <h1>Antonello Galipò</h1>
          <h2>Engineer & Yoga Teacher</h2>
        </div>
      </div>
      
      <div className="profile-bio">
        <p>
          Engineer, coffee nerd, finance enthusiast and yoga teacher.
        </p>
        <p>
          I love working with latest tech to test its boundaries. I've pioneered Flutter over the past years, dedicating a lot of effort and producing educational material for it, actively engaging with the community.
        </p>
        <p>
          Now I work as a Competence Lead for Klarna, mostly Typescript, Python and all that stays around system infrastructure, security, compliance.
        </p>
        <p>
          I love automating stuff and my experience with web scraping makes it super fun, whether it is a complex system or an iPhone shortcut. <em>If it can be done, it can be automated!</em>
        </p>
        <p>
          Last but not least, I've recently grown a passion for finance, from passive investing to paper trading.
        </p>
      </div>

    </div>
  );
};

export default ProfileCard;
