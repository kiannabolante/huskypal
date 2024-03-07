import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ComingSoon.css";

import activatedHome from "../images/nav-bar/activatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";

function ComingSoon() {
  const location = useLocation(); // Use useLocation hook to access the navigation state
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const storedSuggestions =
      JSON.parse(localStorage.getItem("suggestions")) || [];
    setSuggestions(storedSuggestions);
  }, []);

  // Check if the user navigated here after submitting a suggestion
  const fromSubmission = location.state?.fromSubmission;
  function clearSuggestions() {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all suggestions?"
    );
    if (confirmClear) {
      localStorage.removeItem("suggestions");
      setSuggestions([]);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}> {/* Removed listStyle */}
      {fromSubmission && <h1>Suggestion Submitted!</h1>}
      <p style={{marginRight: "300px", marginLeft: "300px"}}>{/* Adjusted margin */}
        Thank you for your challenge suggestion! Your challenge is awaiting
        approval from the HuskyPal team.
        You will receive an email once your
        suggestion has been approved and added to the site. Please enjoy the
        rest of the challenges in the meantime!
      </p>
      {fromSubmission && (
        <div>
          <h4 style={{marginTop: "0px"}}>Suggestions awaiting approval:</h4>
          <ul style={{listStyle: "none"}}>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>

      )}
      <section className="logos">
        <div>
          <Link to="/home">
            <img
              src={activatedHome}
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
              src={deactivatedLevels}
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
  );
}

export default ComingSoon;
