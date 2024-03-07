import React from 'react'

import "./Tracker.css";
import { Link } from "react-router-dom";

import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import activatedLevels from "../images/nav-bar/activatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";
import framePainting from '../images/creative-rewards/framePainting.png'
import yarn from '../images/creative-rewards/yarn.png'
import easelPainting from '../images/creative-rewards/easelPainting.png'
import paintBrush from '../images/creative-rewards/paintBrush.png';
import beret from '../images/creative-rewards/beret.png';


const CreativeTracker = () => {
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
            <div> <img src={yarn} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className=' box displayInLine'>
            <h2>LEVEL 2</h2>
            <div> <img src={framePainting} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className=' box displayInLine'>
            <h2>LEVEL 3</h2>
            <div> <img src={paintBrush} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 4</h2>
            <div>
            <img src={easelPainting} alt='logo7' className='imageSize1 imageSpace1' style={{width: '100px'}} />
</div>          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 5</h2>
            <div> <img src={beret} alt='logo6' className='imageSize1 imageSpace1' /></div>
          </section>

        </div>
      </div>

      {/* Navigation Bar */}
      <section className="logos">
        <div>
          <Link to="/creative">
            <img
              src={deactivatedHome}
              alt="home button to get to home page"
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          <Link to="/creative/closet">
            <img
              src={deactivatedCloset}
              alt="closet button to see accessories "
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          <Link to="/creative/milestone">
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

export default CreativeTracker