import React from 'react';
import './DubsTrack.css'; // Assuming your CSS file is named DubsTrack.css

function DubsTrack() {
  return (
    <div className="track-container">
      <header className="header">
        <div className="trophy-icon">🏆</div>
        <div className="level">4</div>
      </header>
      <div className="profile">
        <div className="profile-icon">🐾</div>
        <h1>Dubs</h1>
      </div>
      <div className="track-title">
        <h2>Athletic Track</h2>
      </div>
      <ul className="activities">
        <li className="completed">Go on a run on the Burke Gilman Trail</li>
        <li>Attend Friday night skating at the IMA</li>
        <li>Watch an upcoming UW sports game</li>
        <li>Join a sports or fitness-related RSO</li>
      </ul>
    </div>
  );
}

export default DubsTrack;
