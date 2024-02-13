import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './DubsTrack.css'; // Assuming your CSS file is named DubsTrack.css

import activatedHome from "../images/nav-bar/activatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";
import huskyAvatar from "../images/huskyAvatar.png";
import activatedLevels from "../images/nav-bar/activatedLevels.png";

function DubsTrack() {
  return (
    <div className="track-container">
      <header className="header">
        <div className="trophy-icon"> <img src={activatedLevels} alt='level display' className='homeLevel' /></div>
        <div className="level">4</div>
      </header>
      <div className="profile">
        <h3>Dubs</h3>
      </div>
      <div className = "avatar">
      <img src={huskyAvatar} alt="husky"/>
      </div>

      <div className='floor-content'>
       <div className="track-title">
        <h3>Athletic Track</h3>
      </div>
      <ul className="activities">
        <li className="completed">Go on a run on the Burke Gilman Trail</li>
        <li>Attend Friday night skating at the IMA</li>
        <li>Watch an upcoming UW sports game</li>
        <li>Join a sports or fitness-related RSO</li>
      </ul>
      </div>

      {/* Additional content with logos */}
      <section className="logos">
        <div>
        <Link to="/user/todolist">
          <img
            src={activatedHome}
            alt="home button to get to home page"
            className="imageSize imageSpace"
          />
        </Link>
        </div>
        <div>
          <Link to="/user/accessories">
            <img
              src={deactivatedCloset}
              alt="closet button to see accessories "
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          <Link to="/user/level">
            <img
              src={deactivatedLevels}
              alt="levels button to see progress and rewards"
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          {" "}
          <img
            src={deactivatedPals}
            alt="pals button to connect with others"
            className="imageSize imageSpace"
          />
        </div>
      </section>
    </div>

  );
}

export default DubsTrack;
