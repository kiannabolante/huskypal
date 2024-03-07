
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import UserContext from '../contexts/UserContext'
import axios from "axios"

const Header = ({ handleLogout }) => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext)


  const handleLogoutClick = () => {
    // Perform logout logic
    axios.post("http://localhost:8000/api/logout", null, { withCredentials: true })
      .then((response) => {
        console.log("Logout successful:", response);
        // Call the provided handleLogout function to update the user state
        handleLogout();
        console.log("User not logged in ,")
        // Navigate to the homepage
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="header">

      {/* Other header content */}
      {loggedInUser._id && <button onClick={handleLogoutClick}>Back to Registration</button>}
    </div>
  );
};

export default Header