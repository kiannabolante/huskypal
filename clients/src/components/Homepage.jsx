import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Homepage.css'; // Assuming the import path is correct

import activatedHome from "../images/nav-bar/activatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";

function TraitBox() {
  const [selectedTrait, setSelectedTrait] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Navigate based on the selected trait using a switch statement
    switch (selectedTrait) {
      case 'creative':
        navigate('/creative');
        break;
      case 'foodie':
        navigate('/foodie');
        break;
      case 'studious':
        navigate('/studious');
        break;
      case 'athletic':
        navigate('/athletic');
        break;
      default:
        navigate('/home'); // Default navigation if no trait is selected or another value is provided
    }
  };

  return (
    <div className="trait-container">
      {/* Navigation Bar */}
      <section className="logos">
        <div>
          <Link to="/home">
            <img src={activatedHome} alt="home button to get to home page" className="imageSize imageSpace" />
          </Link>
        </div>
        <div>
          <Link to="/athletic/closet">
            <img src={deactivatedCloset} alt="closet button to see accessories" className="imageSize imageSpace" />
          </Link>
        </div>
        <div>
          <Link to="/athletic/milestone">
            <img src={deactivatedLevels} alt="levels button to see progress and rewards" className="imageSize imageSpace" />
          </Link>
        </div>
        <div>
          <Link to="/pal">
            <img src={deactivatedPals} alt="pals button to connect with others" className="imageSize imageSpace" />
          </Link>
        </div>
      </section>

      <div className="trait-header">
        Welcome! Please pick a trait for your HuskyPal:
      </div>

      {/* Trait options */}
      <div className="trait-option">
        <input type="radio" id="athletic" name="trait" value="athletic" onChange={(e) => setSelectedTrait(e.target.value)} />
        <label htmlFor="athletic">ATHLETIC</label>
      </div>
      <div className="trait-option">
        <input type="radio" id="creative" name="trait" value="creative" onChange={(e) => setSelectedTrait(e.target.value)} />
        <label htmlFor="creative">CREATIVE</label>
      </div>
      <div className="trait-option">
        <input type="radio" id="studious" name="trait" value="studious" onChange={(e) => setSelectedTrait(e.target.value)} />
        <label htmlFor="studious">STUDIOUS</label>
      </div>
      <div className="trait-option">
        <input type="radio" id="foodie" name="trait" value="foodie" onChange={(e) => setSelectedTrait(e.target.value)} />
        <label htmlFor="foodie">FOODIE</label>
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
      <div className="trait">This trait will determine what UW challenges you're assigned!</div>
    </div>
  );
}

export default TraitBox;