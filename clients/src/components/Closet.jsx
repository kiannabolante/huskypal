import React, { useState, useEffect } from "react";
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
    // { image: baseBallAndMit, initialText: "Not Unlocked" },
  ];

  // Initialize state for button texts
  const [buttonTexts, setButtonTexts] = useState(
    buttonsData.map((button) => button.initialText)
  );

  const navigate = useNavigate();

  // Function to handle button click for a specific button index
 // Function to handle button click for a specific button index
  const handleButtonClick = (index) => {
    setButtonTexts((prevTexts) => {
      const newTexts = [...prevTexts];
      newTexts[index] = newTexts[index] === "Place" ? "In-Use" : "Place";
      return newTexts;
    });

  const selectedItem = buttonsData[index];
  let updatedItems = [];

  // Retrieve the existing items from localStorage
  const storedItems = localStorage.getItem("selectedItems");
  if (storedItems) {
    updatedItems = JSON.parse(storedItems);
  }

  // Check if the item is already selected
  const itemIndex = updatedItems.findIndex((item) => item.image === selectedItem.image);

  // If not selected add it; otherwise remove it
  if (itemIndex === -1) {
    updatedItems.push(selectedItem);
  } else {
    updatedItems.splice(itemIndex, 1);
  }

  // Update localStorage with the updated items array
  localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
};


useEffect(() => {
  // Retrieve the selected items array from localStorage when the component mounts
  const storedItems = localStorage.getItem("selectedItems");

  if (storedItems) {
    // If selected items are found in localStorage, update the button texts accordingly
    const parsedItems = JSON.parse(storedItems);
    const updatedButtonTexts = buttonsData.map((button) => {
      // Check if the current button corresponds to any of the selected items
      const isSelected = parsedItems.some((item) => item.image === button.image);
      return isSelected ? "In-Use" : "Place";
    });

    // Update the button texts state with the updated values
    setButtonTexts(updatedButtonTexts);
  }
}, []); // The empty dependency array ensures this effect runs only once, when the component mounts

  return (
    <div style={{ backgroundColor: "#CEC1FB" }}>
      <div className="container">
        <h1>Your Accessories</h1>
        <p>Place items into your HuskyPal's room!</p>
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
                            to="/athletic"
                            state={{ selectedItem: button }}
                          >
                            <button
                              type="button"
                              className="button"
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
            </table>
          </div>

          {/* Navigation Bar */}
          <section className="logos">
            <div>
              {/* Link to home page */}
              <Link to="/athletic">
                <img
                  src={deactivatedHome}
                  alt="home button to get to home page"
                  className="imageSize imageSpace"
                />
              </Link>
            </div>
            <div>
              {/* Link to accessories page */}
              <Link to="/athletic/closet">
                <img
                  src={activatedCloset}
                  alt="closet button to see accessories "
                  className="imageSize imageSpace"
                />
              </Link>
            </div>
            <div>
              {/* Link to level page */}
              <Link to="/athletic/milestone">
                <img
                  src={deactivatedLevels}
                  alt="levels button to see progress and rewards"
                  className="imageSize imageSpace"
                />
              </Link>
            </div>
            <div>
              {/* Link to pals page */}
              <Link to="/pal">
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