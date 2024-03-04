


// export default TrackPal

import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import axios from "axios";
import user from "../images/Pal-images/user.png";
import email from "../images/Pal-images/email.png";
import UserContext from '../contexts/UserContext';


const TrackPal = () => {
  const navigate = useNavigate();

  const { loggedInUser } = useContext(UserContext)
  // if the user not logged in send them  back to home
  useEffect(() => {
    console.log("TrackPal component mounted");
    console.log("loggedInUser:", loggedInUser);

    if (!loggedInUser._id) {
      console.log("User not logged in, navigating to /");
      navigate("/");
    }
  }, []);

  const [users, setUsers] = useState([]);

  useEffect(() => {
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

      <h1> Track Pals </h1>
      <section>
        <h4> Connect with people completing the same track as you! </h4>
        <hr />
      </section>
      <div className="emailListContainer">
        <ul className="emailList">
          {users.map((oneUser) => {
            console.log("Instagram:", oneUser.instagram);
            return (
              <li key={oneUser._id} className="emailItem">
                <img src={user} alt="User Icon" className="icon userIcon" />
                <span>
                  <div style={{ color: "purple", textDecoration: "underline" }}>
                    User First Name: <span style={{ margin: "5px" }}>{oneUser.firstName}</span>
                  </div>
                  <a
                    href={`https://www.instagram.com/${oneUser.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    <span style={{ color: "purple", margin: "20px" }}>User Instagram:</span> {oneUser.instagram}
                  </a>
                </span>
                <img src={email} alt="Email Icon" className="icon emailIcon" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default TrackPal;