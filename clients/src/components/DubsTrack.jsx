// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './DubsTrack.css'; // Assuming your CSS file is named DubsTrack.css
// import { useLocation } from "react-router-dom";


// import activatedHome from "../images/nav-bar/activatedHome.png";
// import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
// import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
// import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";
// import huskyAvatar from "../images/huskyAvatar.png";
// import activatedLevels from "../images/nav-bar/activatedLevels.png";
// import baseBallAndMit from '../images/athletic-rewards/baseBallAndMit.png';
// import tennisBall from '../images/athletic-rewards/tennisBall.png';
// import basketBall from '../images/athletic-rewards/basketBall.png';
// import tennisRacket from '../images/athletic-rewards/tennisRacket.png';
// import basketBallHoop from '../images/athletic-rewards/basketBallHoop.png';

// function DubsTrack() {


//   // Use useLocation hook to access location state
//   const location = useLocation();
//   const selectedItem = location.state ? location.state.selectedItem : null;
//   return (
//     <div className="track-container">
//       <header className="header">
//         <div className="trophy-icon"> <img src={activatedLevels} alt='level display' className='homeLevel' /></div>
//         <div className="level">4</div>
//       </header>
//       <div className="profile">
//         <h3>Dubs</h3>
//       </div>
//       <div className="avatar">
//         <img src={huskyAvatar} alt="husky" />
//         <div className="selected-item">
//           {/* Display the selected item's image if selectedItem exists */}
//           {selectedItem && <img src={selectedItem.image} alt="selected item" />}
//         </div>
//       </div>

//       <div className='floor-content'>
//         <div className="track-title">
//           <h3>Athletic Track</h3>
//         </div>
//         <ul className="activities">
//           {/* Added checkboxes before each list item */}
//           <li className="completed"><input type="checkbox" />Go on a run on the Burke Gilman Trail</li>
//           <li><input type="checkbox" />Join a sports or fitness-related RSO</li>
//           <li><input type="checkbox" />Friday night skating at the IMA:  Form a team and participate in a relay race during Friday night skating at the IMA</li>
//           <li><input type="checkbox" />UW Sports Game Challenge: Attend at least three different UW sports games in a semester</li>
//           <li><input type="checkbox" />Attend Adventure Club Expedition: Participate in activities such as hiking, rock climbing, kayaking, or camping</li>
//         </ul>
//       </div>

//       {/* Additional content with logos */}
//       <section className="logos">
//         <div>
//           <Link to="/">
//             <img
//               src={activatedHome}
//               alt="home button to get to home page"
//               className="imageSize imageSpace"
//             />
//           </Link>
//         </div>
//         <div>
//           <Link to="/user/accessories">
//             <img
//               src={deactivatedCloset}
//               alt="closet button to see accessories "
//               className="imageSize imageSpace"
//             />
//           </Link>
//         </div>
//         <div>
//           <Link to="/user/level">
//             <img
//               src={deactivatedLevels}
//               alt="levels button to see progress and rewards"
//               className="imageSize imageSpace"
//             />
//           </Link>
//         </div>
//         <div>
//           <Link to="/user/pal">
//             <img
//               src={deactivatedPals}
//               alt="pals button to connect with others"
//               className="imageSize imageSpace"
//             />
//           </Link>
//         </div>
//       </section>
//     </div>

//   );
// }

// export default DubsTrack;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DubsTrack.css';
import { getCurrentLevel, setCurrentLevel, MAX_LEVEL } from './LevelSystem.jsx';
import { useNavigate } from 'react-router-dom';
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


function DubsTrack() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [
        { id: 1, completed: false, label: "Go on a run on the Burke Gilman Trail" },
        { id: 2, completed: false, label: "Friday night skating at the IMA: Form a team and participate in a relay race during Friday night skating at the IMA" },
        { id: 3, completed: false, label: "UW Sports Game Challenge: Attend at least three different UW sports games in a semester" },
        { id: 4, completed: false, label: "Join a sports or fitness-related RSO" },
        { id: 5, completed: false, label: "Attend Adventure Club Expedition: Participate in activities such as hiking, rock climbing, kayaking, or camping" }
      ];
    });
    const [level, setLevel] = useState(() => {
      const storedLevel = getCurrentLevel();
      if (storedLevel === null || isNaN(storedLevel)) { // Check if stored level is not set or invalid
        setCurrentLevel(0); // Initialize new users at level 0
        return 0;
      }
      return parseInt(storedLevel, 10);
    });
   
    const [progressPercentage, setProgressPercentage] = useState(0);
    const [levelMessage, setLevelMessage] = useState('');


    useEffect(() => {
        setCurrentLevel(level);
    }, [level]);


    useEffect(() => {
      // Temporary display message logic
      let messageTimeout = null;
      // Display message based on level
      if (level > 0 && level < MAX_LEVEL) {
        setLevelMessage('Level Up!');
        setProgressPercentage(100);
        messageTimeout = setTimeout(() => {
          setProgressPercentage(0);
          setLevelMessage(''); // Clear message when progress bar resets
        }, 2000);
      } else if (level === MAX_LEVEL) {
        setLevelMessage('Current Max Level Reached: Congrats!');
        setProgressPercentage(100); // Keep the progress bar full at max level
      }
      return () => {
        if (messageTimeout) {
          clearTimeout(messageTimeout);
        }
      };
    }, [level]);


    const handleTaskCompletion = (taskId) => {
      let updatedTasks = tasks.map(task => {
          if (task.id === taskId && !task.completed) { // Only update if the task is not already completed
              // Increment level for each task completion, up to MAX_LEVEL
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


    // New function to toggle task expansion (readmore)
    const toggleExpansion = (id) => {
      setExpandedId(expandedId === id ? null : id);
    };


    // New event handler for navigation icon clicks
    const handleNavIconClick = (event) => {
      event.stopPropagation(); // Prevents event from bubbling up
    };

    // For testing purposes - a reset level button
    const resetLevel = () => {
      setCurrentLevel(0); // Reset the level to 0
      setLevel(0); // Update local state to reflect the reset
      setTasks(tasks.map(task => ({ ...task, completed: false }))); // Reset tasks to uncompleted
      setProgressPercentage(0); // Reset progress percentage to 0
      setLevelMessage(''); // Optionally reset the level message if you're using one
    };

    // this fuction is for suggestons buttons 
    const navigate = useNavigate(); // Correct usage
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
            {/* Level Progress Bar and Level Display */}
            <button className="reset-level-btn" onClick={resetLevel}>Reset Level</button>
            <div className="level-progress-container">
                <div className="level-progress-bar" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="current-level-display">Level: {level}</div>
            {levelMessage && <div className="level-up-message">{levelMessage}</div>}
            <header className="header">
                <div className="trophy-icon">
                    <img src={activatedLevels} alt="level display" className="homeLevel" />
                </div>
                <div className="level">{level}</div>
            </header>
            <div className="profile">
                <h3>Dubs</h3>
            </div>
            <div className="avatar">
                <img src={huskyAvatar} alt="husky" />
                <div className="selected-items">
                    {selectedItems.map((item, index) => (
                        <img key={index} src={item.image} alt={`selected item ${index}`} />
                    ))}
                </div>
            </div>
            <div className="floor-content">
                <h3>Athletic Track</h3>
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
            </div>
            <section className="logos" onClick={handleNavIconClick}>
                <Link to="/user/todolist">
                    <img src={activatedHome} alt="home button to get to home page" className="imageSize imageSpace" />
                </Link>
                <Link to="/user/accessories">
                    <img src={deactivatedCloset} alt="closet button to see accessories" className="imageSize imageSpace" />
                </Link>
                <Link to="/user/level">
                    <img src={deactivatedLevels} alt="levels button to see progress and rewards" className="imageSize imageSpace" />
                </Link>
                <Link to="/user/pal">
                    <img src={deactivatedPals} alt="pals button to connect with others" className="imageSize imageSpace" />
                </Link>
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


export default DubsTrack;