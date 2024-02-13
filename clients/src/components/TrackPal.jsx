import React from 'react';
import "./TrackPal.css";
import { Link } from "react-router-dom";

import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
import activatedPals from "../images/nav-bar/activatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";

const emailNames = [
    'ramlaa@uw.edu',
    'kbolan@uw.edu',
    'fatuma18@uw.edu',
    'vraguram@uw.edu',
    'fana21@uw.edu',
  ];

const TrackPal = () => {
  return (
    <div style={{ backgroundColor: "#F8F3E2" }}>
      <h1> Track Pals </h1>
      <section>
        <h4> Connect with people completing the same track as you! </h4>
        <hr />
      </section>

      {/* List of Pals */}
      <div className="emailListContainer">
        <ul className="emailList">
          {emailNames.map((email, index) => (
            <li key={index} className="emailItem">{email}</li>
          ))}
        </ul>
      </div>

      {/* Navigation Bar */}
      <section className="logos">
        <div>
        <Link to="/user/todolist">
                <img
                  src={deactivatedHome}
                  alt="home button to get to home page"
                  className="imageSize imageSpace"
                />
              </Link>
        </div>
        <div>
          <Link to="/user/accessories">
            <img
              src={deactivatedCloset}
              alt="closet button to see accessories"
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
          <Link to="/user/pal">
            <img
              src={activatedPals}
              alt="pal button to connect with others"
              className="imageSize imageSpace"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TrackPal;