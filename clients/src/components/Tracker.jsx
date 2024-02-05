import React from 'react'

import "./Tracker.css";
import { Link } from "react-router-dom";

import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import activatedLevels from "../images/nav-bar/activatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";
import image6 from '../images/athletic-rewards/image6.png'
import image7 from '../images/athletic-rewards/image7.png'
import image8 from '../images/athletic-rewards/image8.png'
import image9 from '../images/athletic-rewards/image9.png';

const Tracker = () => {
  return (
    <div style={{ backgroundColor: "#FFFCF2" }}>
      <h1> Track Milestones </h1>
      <section >

        <h2>LEVEL</h2>
        <div> <img src={activatedLevels} alt='level display' className='levelDisplay imageSpace1' /></div>
        <h4> Complete more challenges, gain more levels,
          unlock more rewards!
        </h4>
        <hr />
      </section>
      <div className="full-page-box">
        <div className="box-content">
          <section className=' box displayInLine'>
            <h2>LEVEL 2</h2>
            <div> <img src={image9} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className=' box displayInLine'>
            <h2>LEVEL 5</h2>
            <div> <img src={image8} alt='logo8' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 1</h2>
            <div> <img src={image7} alt='logo7' className='imageSize1 imageSpace1' /></div>
          </section>

          <section className='box displayInLine'>
            <h2>LEVEL 4</h2>
            <div> <img src={image6} alt='logo6' className='imageSize1 imageSpace1' /></div>
          </section>

        </div>
      </div>

       {/* Navigation Bar */}
       <section className="logos">
          <div>
            {" "}
            <img
              src={deactivatedHome}
              alt="home button to get to home page"
              className="imageSize imageSpace"
            />
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
              src={activatedLevels}
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
  )
}

export default Tracker