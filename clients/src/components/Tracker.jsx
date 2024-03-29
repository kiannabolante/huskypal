import React from 'react'

import "./Tracker.css";
import { Link } from "react-router-dom";

import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import activatedLevels from "../images/nav-bar/activatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";
import baseBallAndMit from '../images/athletic-rewards/baseBallAndMit.png'
import tennisBall from '../images/athletic-rewards/tennisBall.png'
import basketBall from '../images/athletic-rewards/basketBall.png'
import tennisRacket from '../images/athletic-rewards/tennisRacket.png';
import basketBallHoop from '../images/athletic-rewards/basketBallHoop.png';

const Tracker = () => {
  return (
    <div style={{ backgroundColor: "#F8F3E2" }}>
      {/* Rewards and Levels */}
      <div className="full-page-box">
      <h1> Track Milestones </h1>
        <p> Complete more challenges, gain more levels,
          unlock more rewards!
        </p>
        <p>Here are all the rewards you can unlock in this track.</p>
        <div className="box-content">
          <section className=' box displayInLine'>
            <h2>LEVEL 1</h2>
            <div> <img src={tennisBall} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className=' box displayInLine'>
            <h2>LEVEL 2</h2>
            <div> <img src={basketBall} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className=' box displayInLine'>
            <h2>LEVEL 3</h2>
            <div> <img src={tennisRacket} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 4</h2>
            <div> <img src={basketBallHoop} alt='logo7' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 5</h2>
            <div> <img src={baseBallAndMit} alt='logo6' className='imageSize1 imageSpace1' /></div>
          </section>

        </div>
      </div>

      {/* Navigation Bar */}
      <section className="logos">
        <div>
          <Link to="/athletic">
            <img
              src={deactivatedHome}
              alt="home button to get to home page"
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          <Link to="/athletic/closet">
            <img
              src={deactivatedCloset}
              alt="closet button to see accessories "
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          <Link to="/athletic/milestone">
            <img
              src={activatedLevels}
              alt="levels button to see progress and rewards"
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          <Link to="/pal">
            <img
              src={deactivatedPals}
              alt="pals button to connect with others"
              className="imageSize imageSpace"
            />
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Tracker