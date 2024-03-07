import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./DubsTrack.css";
import { getCurrentLevel, setCurrentLevel, MAX_LEVEL } from './LevelSystem.jsx';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import UserContext from '../contexts/UserContext';

import activatedHome from "../images/nav-bar/activatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";
import huskyAvatar from "../images/huskyAvatar.png";
import activatedLevels from "../images/nav-bar/activatedLevels.png";

function Foodie() {
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const componentKey = 'Foodie';
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItems, setSelectedItems] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const defaultDubsTrackTasks = [
    { id: 1, completed: false, label: "Campus Cuisine Tour: Explore different dining options on campus and rate your favorite meals from each location." },
    { id: 2, completed: false, label: "Cultural Cooking Class: Attend a cooking class focused on a specific cuisine or cultural dish, hosted by a student organization or local chef." },
    { id: 3, completed: false, label: "Food Truck Frenzy: Sample offerings from various food trucks parked on campus during a designated food truck event." },
    { id: 4, completed: false, label: "Farmers Market Challenge: Create a meal using only ingredients purchased from the UW Farmers Market, showcasing local and sustainable produce." },
    { id: 5, completed: false, label: "Culinary Club Cuisine Exploration: Attend a cooking demonstration or tasting event hosted by a culinary-focused RSO on campus. Learn about different cuisines, cooking techniques, and culinary traditions from around the world. Sample diverse flavors and ingredients while connecting with fellow food enthusiasts. Share your favorite recipes or newfound culinary knowledge with friends and consider joining the RSO to further explore your passion for food." },
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(`${componentKey}_tasks`);
    return savedTasks ? JSON.parse(savedTasks) : defaultDubsTrackTasks;
  });

  const [level, setLevel] = useState(getCurrentLevel(componentKey, userId));
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [levelMessage, setLevelMessage] = useState('');

  useEffect(() => {
    setCurrentLevel(level, componentKey, userId);
  }, [level]);

  useEffect(() => {
    localStorage.setItem(`${componentKey}_tasks`, JSON.stringify(tasks));
  }, [tasks, componentKey, userId]);

  useEffect(() => {
    let messageTimeout = null;
    if (level > 0 && level < MAX_LEVEL) {
      setLevelMessage('Level Up!');
      setProgressPercentage(100);
      messageTimeout = setTimeout(() => {
        setProgressPercentage(0);
        setLevelMessage('');
      }, 2000);
    } else if (level === MAX_LEVEL) {
      setLevelMessage('Current Max Level Reached: Congrats!');
      setProgressPercentage(100);
    }
    return () => {
      if (messageTimeout) {
        clearTimeout(messageTimeout);
      }
    };
  }, [level]);

  const handleTaskCompletion = (taskId) => {
    let updatedTasks = tasks.map(task => {
      if (task.id === taskId && !task.completed) {
        if (level < MAX_LEVEL) {
          setLevel(prevLevel => prevLevel + 1);
        }
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleExpansion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleNavIconClick = (event) => {
    event.stopPropagation();
  };

  // For testing purposes - a reset level button
  const resetLevel = () => {
    setCurrentLevel(0);
    setLevel(0);
    setTasks(tasks.map(task => ({ ...task, completed: false })));
    setProgressPercentage(0);
    setLevelMessage('');
  };

  const selectedItem = location.state ? location.state.selectedItem : null;
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    console.log("Retrieving selected items from localStorage");
    const storedItems = localStorage.getItem("selectedItems");
    if (storedItems) {
        setSelectedItems(JSON.parse(storedItems));
    } else {
        console.log("No selected items found in localStorage");
    }
}, []);

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("Form submitted");
    event.preventDefault();
    if (!suggestion.trim()) {
      console.log("Empty suggestion, not saving");
      return;
    }
    const storedSuggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
    const newSuggestions = [...storedSuggestions, suggestion];
    localStorage.setItem('suggestions', JSON.stringify(newSuggestions));
    setSuggestion('');
    navigate('/coming-soon', { state: { fromSubmission: true } });
  };

  return (
    <div className="track-container">
        {/* Level Progress Bar and Level Display */}
      <button className="smallButton" onClick={resetLevel}>
        Reset Level
      </button>
      <div className="level-progress-container">
        <div
          className="level-progress-bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="current-level-display">Level: {level}</div>
      {levelMessage && <div className="level-up-message">{levelMessage}</div>}
      <header className="header" style={{marginTop:"-80px"}}>
        <div className="trophy-icon">
          <img
            src={activatedLevels}
            alt="level display"
            className="homeLevel"
          />
        </div>
        <div className="level" style={{marginTop: "-62px", fontSize: "18px"}}>{level}</div>
      </header>
      <div className="profile">
        <br></br>
        <br></br>
        <h3>Dubs</h3>
      </div>
      <div className="avatar-container">
        <div className="avatar">
          <img src={huskyAvatar} alt="husky" />
        </div>
        <div className="selected-items">
          {selectedItems.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`selected item ${index}`}
              className="selected-item"
            />
          ))}
        </div>
      </div>
        <div className="floor-content">
            <h3>Foodie Track</h3>
            <ul className="activities">
            {tasks.map((task) => (
                <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
                <div className="checkbox-container">
                    <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleTaskCompletion(task.id)}
                    />
                </div>
                <div
                    className="task-label"
                    onClick={() => toggleExpansion(task.id)}
                >
                    {expandedId === task.id ? (
                    <span>{task.label} <span className="read-more">Read Less</span></span>
                    ) : (
                    <span>
                        {task.label.length > 100 ? `${task.label.substring(0, 100)}... ` : task.label}
                        {task.label.length > 100 && <span className="read-more">Read More</span>}
                    </span>
                    )}
                </div>
                </li>
            ))}
            </ul>
            <div className="suggestion-box">
          <h4 style={{ marginTop: "0px", marginBottom: "-5px" }}>
            Suggest a Challenge!
          </h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={suggestion}
              onChange={handleSuggestionChange}
              placeholder="Type your challenge suggestion here..."
              className="suggestion-input"
            />
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
      <section className="logos">
        <div>
        <Link to="/foodie">
          <img
            src={activatedHome}
            alt="home button to get to home page"
            className="imageSize imageSpace"
          />
        </Link>
        </div>
        <div>
          <Link to="/foodie/closet">
            <img
              src={deactivatedCloset}
              alt="closet button to see accessories "
              className="imageSize imageSpace"
            />
          </Link>
        </div>
        <div>
          <Link to="/foodie/milestone">
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

export default Foodie;
