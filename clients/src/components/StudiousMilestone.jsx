import React from 'react'

import "./Tracker.css";
import { Link } from "react-router-dom";

import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import activatedLevels from "../images/nav-bar/activatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";
import apple from '../images/studious-rewards/apple.png'
import bookshelf from '../images/studious-rewards/bookshelf.png'
import laptop from '../images/studious-rewards/laptop.png'
import glasses from '../images/studious-rewards/glasses.png';
import notepad from '../images/studious-rewards/notepad.png';


const StudiousMilestone = () => {
  return (
    <div style={{ backgroundColor: "#F8F3E2" }}>
      {/* Rewards and Levels */}
      <div className="full-page-box">
      <h1> Track Milestones </h1>
        {/* <h3>LEVEL</h3>
        <div className='wholeLevel'>
          <div className="trophyLevel"> <img src={activatedLevels} alt='level display' className='levelDisplay imageSpace1' /></div>
          <div className="levelTrack">4</div>
        </div> */}
        <p> Complete more challenges, gain more levels,
          unlock more rewards!
        </p>
        <p>Here are all the rewards you can unlock in this track.</p>
        <div className="box-content">
          <section className=' box displayInLine'>
            <h2>LEVEL 1</h2>
            <div> <img src={apple} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className=' box displayInLine'>
            <h2>LEVEL 2</h2>
            <div> <img src={laptop} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className=' box displayInLine'>
            <h2>LEVEL 3</h2>
            <div> <img src={notepad} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 4</h2>
            <div> <img src={bookshelf} alt='logo7' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 5</h2>
            <div> <img src={glasses} alt='logo6' className='imageSize1 imageSpace1'  style={{height: '80px'}} /></div>
          </section>

        </div>
      </div>

      {/* Navigation Bar */}
      <section className="logos">
        <div>
          <Link to="/studious">
            <img
              src={deactivatedHome}
              alt="home button to get to home page"
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          <Link to="/studious/closet">
            <img
              src={deactivatedCloset}
              alt="closet button to see accessories "
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          <Link to="/studious/milestone">
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

export default StudiousMilestone