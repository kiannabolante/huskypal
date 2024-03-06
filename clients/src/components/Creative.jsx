import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Creative.css'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom for navigation


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

function Creative() {

  const navigate = useNavigate(); // Correct usage
  // Use useLocation hook to access location state
  const location = useLocation();
  const selectedItem = location.state ? location.state.selectedItem : null;

  const [suggestion, setSuggestion] = useState('');
  // const history = useHistory(); // Use useHistory hook for navigation

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };
  
  const handleSubmit = (event) => {
    console.log("Form submitted");
    event.preventDefault();
    if (!suggestion.trim()) {
      console.log("Empty suggestion, not saving");
      return; // Don't proceed if the suggestion is empty
    }

    // Assuming 'suggestions' is the key where you want to save your suggestions
    const storedSuggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
    const newSuggestions = [...storedSuggestions, suggestion];
    localStorage.setItem('suggestions', JSON.stringify(newSuggestions));
    setSuggestion(''); // Reset suggestion input
    // Inside your handleSubmit function, just before navigate
    navigate('/coming-soon', { state: { fromSubmission: true } });
  };

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
          <h3>Creative Track</h3>
        </div>
        <ul className="activities">
          {/* Added checkboxes before each list item */}
          <li className="completed"><input type="checkbox"/> UW Photography Challenge: Capture and share a series of photographs that depict the diversity and beauty of UW campus life</li>
          <li><input type="checkbox" />Artistic Exploration: Create a piece of art inspired by a specific location on campus or a notable UW landmark</li>
          <li><input type="checkbox" />UW Campus Sketchbook Project: Create a sketchbook dedicated to capturing the essence of UW campus life through drawings, doodles, and sketches</li>
          <li><input type="checkbox" />RSO Showcase Experience: Attend a showcase such as a dance recital, theater production, or musical concert</li>
          <li><input type="checkbox" />Spoken Word Night: Participate in a spoken word poetry event at a local cafÃ© or on campus </li>
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

      <div className="suggestion-box">
        <h3>Add Your Challenge Suggestion</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={suggestion}
            onChange={handleSuggestionChange}
            placeholder="Type your challenge suggestion here..."
            className="suggestion-input"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>

  );
}

export default Creative;