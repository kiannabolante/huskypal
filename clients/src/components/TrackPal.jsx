import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import user from '../images/Pal-images/user.png';
import './TrackPal.css';
import email from '../images/Pal-images/email.png';
import UserContext from '../contexts/UserContext';
import { Link } from 'react-router-dom';

import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import activatedHome from "../images/nav-bar/activatedHome.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";

const TrackPal = () => {
  // const { loggedInUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   // Fetch data only if the user is logged in
  //   if (loggedInUser._id) {
  //     axios
  //       .get('http://localhost:8000/api/users')
  //       .then((response) => {
  //         setUsers(response.data.users);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching users:', error);
  //       });
  //   }
  // }, [loggedInUser._id]);

  // If the user is not logged in, you might want to return a message or redirect them to the login page
  // if (!loggedInUser._id) {
  //   return <p>Please log in to view this content.</p>;
  // }

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
    <div >
      <ul >
        {users.map((oneUser) => (
          <li key={oneUser._id} className="emailItem">
            <img src={user} alt="User Icon" className="icon userIcon" />
            <span>
              <div style={{ color: 'purple', textDecoration: 'underline' }}>
                User First Name: <span style={{ margin: '5px' }}>{oneUser.firstName}</span>
              </div>
              <a
                href={`https://www.instagram.com/${oneUser.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                <span style={{ color: 'purple', margin: '20px' }}>User Instagram:</span> {oneUser.instagram}
              </a>
            </span>
            <img src={email} alt="Instagram Icon" className="icon emailIcon" />
          </li>
        ))}
      </ul>

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
};

export default TrackPal;
