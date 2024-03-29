import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import user from "../images/Pal-images/user.png";
import { Link } from "react-router-dom";
import "./TrackPal.css";
import instagram from "../images/Pal-images/instagram.png";
import profileUser from "../images/Pal-images/profileUser.png";
import UserContext from "../contexts/UserContext";
import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
import activatedPals from "../images/nav-bar/activatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";

const TrackPal = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the server
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
        <div className="full-page-users">
        <h1> Track Pals </h1>
        <p> Reach out to fellow users to complete UW challenges together!
        </p>
        <p>Click on their Instagram icon to get connected!</p>
      <ul style={{ backgroundColor: "#f8f3e2", padding: "50px", border: "4px solid #6b5d92", borderRadius: "10px"}}>
        {users.map((oneUser) => (
          <li key={oneUser._id} className="emailItem">
            <img src={profileUser} alt="User Icon" className="icon userIcon" />
            <span>
              <div style={{ color: "#6b5d92", textDecoration: "none", textAlign: "left", paddingLeft: "15px" }}>
                User First Name:{" "}
                <span style={{ margin: "5px" }}>{oneUser.firstName}</span>
              </div>
              <a
                href={`https://www.instagram.com/${oneUser.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
              </a>
            </span>
              <a
                href={`https://www.instagram.com/${oneUser.instagram}`}
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={instagram} alt="Instagram Icon" className="icon emailIcon" />
              </a>
          </li>
        ))}
      </ul>
      </div>
            {/* Navigation Bar */}
            <section className="logos">
        <div>
          <Link to="/home">
            <img
              src={deactivatedHome}
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
              src={activatedPals}
              alt="pals button to connect with others"
              className="imageSize imageSpace"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TrackPal;
