import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import user from '../images/Pal-images/user.png';
import './TrackPal.css';
import email from '../images/Pal-images/email.png';
import UserContext from '../contexts/UserContext';

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
            <img src={email} alt="Email Icon" className="icon emailIcon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackPal;
