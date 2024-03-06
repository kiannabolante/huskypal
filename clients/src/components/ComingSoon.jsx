import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import './ComingSoon.css';

import activatedHome from "../images/nav-bar/activatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";

function ComingSoon() {
    const location = useLocation(); // Use useLocation hook to access the navigation state
    const [suggestions, setSuggestions] = useState([]);
  
    useEffect(() => {
      const storedSuggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
      setSuggestions(storedSuggestions);
    }, []);
  
    // Check if the user navigated here after submitting a suggestion
    const fromSubmission = location.state?.fromSubmission;

    function clearSuggestions() {
        const confirmClear = window.confirm("Are you sure you want to clear all suggestions?");
        if (confirmClear) {
          localStorage.removeItem('suggestions');
          setSuggestions([]);
        }
    }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Remove the Coming Soon heading and only show Wait to get approved conditionally */}
      {fromSubmission && <h1>Wait to get approved</h1>}
      
      {/* Conditionally display the suggestions list if fromSubmission is true */}
      {fromSubmission && (
        <div>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li> // Display each suggestion in a list item
            ))}
          </ul>
        </div>
      )}

       {/* Button to clear all suggestions */}
       <button onClick={clearSuggestions} className="clear-suggestions-btn">Clear All Suggestions</button>

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

export default ComingSoon;
