import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Creative.css'
import { useLocation } from "react-router-dom";


import activatedHome from "../images/nav-bar/activatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";
import huskyAvatar from "../images/huskyAvatar.png";
import activatedLevels from "../images/nav-bar/activatedLevels.png";
import baseBallAndMit from '../images/athletic-rewards/baseBallAndMit.png';
import tennisBall from '../images/athletic-rewards/tennisBall.png';
import basketBall from '../images/athletic-rewards/basketBall.png';
import tennisRacket from '../images/athletic-rewards/tennisRacket.png';
import basketBallHoop from '../images/athletic-rewards/basketBallHoop.png';

function Foodie() {

    // Use useLocation hook to access location state
    const location = useLocation();
    const selectedItem = location.state ? location.state.selectedItem : null;
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
      <div className="selected-item">
                {/* Display the selected item's image if selectedItem exists */}
                {selectedItem && <img src={selectedItem.image} alt="selected item" />}
            </div>
      </div>

      <div className='floor-content'>
        <div className="track-title">
          <h3>Foodie Track</h3>
        </div>
        <ul className="activities">
          {/* Added checkboxes before each list item */}
          <li className="completed"><input type="checkbox"/>Campus Cuisine Tour: Explore different dining options on campus and rate your favorite meals from each location</li>
          <li><input type="checkbox" />Cultural Cooking Class: Attend a cooking class focused on a specific cuisine or cultural dish, hosted by a student organization or local chef</li>
          <li><input type="checkbox" />Food Truck Frenzy: Sample offerings from various food trucks parked on campus during a designated food truck event</li>
          <li><input type="checkbox" />Farmers Market Challenge: Create a meal using only ingredients purchased from the UW Farmers Market, showcasing local and sustainable produce</li>
          <li><input type="checkbox" />Culinary Club Cuisine Exploration: Attend a cooking demonstration or tasting event hosted by a culinary-focused RSO on campus</li>
        </ul>
      </div>

      {/* Additional content with logos */}
      <section className="logos">
        <div>
        <Link to="/">
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
        <Link to="/user/pal">
                <img
                  src={deactivatedPals}
                  alt="pals button to connect with others"
                  className="imageSize imageSpace"
                />
              </Link>
        </div>
      </section>
    </div>

  );
}

export default Foodie;