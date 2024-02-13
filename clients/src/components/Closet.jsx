import React, { useState } from "react";
import "./Closet.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import activatedCloset from "../images/nav-bar/activatedCloset.png";
import baseBallAndMit from "../images/athletic-rewards/baseBallAndMit.png";
import tennisBall from "../images/athletic-rewards/tennisBall.png";
import basketBall from "../images/athletic-rewards/basketBall.png";
import tennisRacket from "../images/athletic-rewards/tennisRacket.png";
import basketBallHoop from "../images/athletic-rewards/basketBallHoop.png";

const Closet = () => {
  // Define button data containing image source and initial button text
  const buttonsData = [
    { image: tennisBall, initialText: "Place" },
    { image: tennisRacket, initialText: "Place" },
    { image: basketBall, initialText: "Place" },
    { image: basketBallHoop, initialText: "Place" },
    // Add more button data as needed
  ];
  // Initialize state for button texts
  const [buttonTexts, setButtonTexts] = useState(
    buttonsData.map((button) => button.initialText)
  );

  const navigate = useNavigate();

  // Function to handle button click for a specific button index
  const handleButtonClick = (index) => {
    setButtonTexts((prevTexts) => {
      const newTexts = [...prevTexts];
      newTexts[index] = newTexts[index] === "Place" ? "In-Use" : "Place";
      return newTexts;
    });

    // Pass the selected item's information to the DubsTrack component
    const selectedItem = buttonsData[index];
    navigate("/user/todolist", { state: { selectedItem } });
  };

  return (
    <div style={{ backgroundColor: "#CEC1FB" }}>
      <div className="container">
        <h1>Your Accessories</h1>
        <section className="displayLine">
          <div className="custom-table-container">
            <table className="table custom-table">
              <thead>
                {/* Render buttons dynamically */}
                {buttonsData
                  .reduce((rows, key, index) => {
                    index % 2 === 0
                      ? rows.push([key])
                      : rows[rows.length - 1].push(key);
                    return rows;
                  }, [])
                  .map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((button, colIndex) => (
                        <th key={colIndex}>
                          <img
                            src={button.image}
                            alt={`activate${colIndex}`}
                            className="activate"
                          />
                          {/* Pass the selected item's information through the Link component */}
                          <Link
                            to="/user/todolist"
                            state={{ selectedItem: button }}
                          >
                            <button
                              type="button"
                              className="oval-button"
                              onClick={() =>
                                handleButtonClick(rowIndex * 2 + colIndex)
                              }
                            >
                              {buttonTexts[rowIndex * 2 + colIndex]}
                            </button>
                          </Link>
                        </th>
                      ))}
                    </tr>
                  ))}
              </thead>
              {/* You can add more table rows and buttons here */}
            </table>
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
                  src={activatedCloset}
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
        </section>
      </div>
    </div>
  );
};

export default Closet;
