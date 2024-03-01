// import React from 'react'
// import { useContext, useEffect, } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import UserContext from '../contexts/UserContext';
// import "./RegistrationForm.css";
// const Dashboard = () => {
//   const navigate = useNavigate();
//   const { loggedInUser } = useContext(UserContext)
//   // if the user not logged in send them  back to home
//   useEffect(() => {
//     console.log("Dashboard userEffect triggered")
//     if (!loggedInUser._id) {
//       console.log("User not logged in, navigating to /")
//       navigate("/");
//     }
//   }, [loggedInUser._id]);

//   return (
//     <div>
//       <form action="" className="col-med-4 offset display-info ">
//         <h3>Your Email: {loggedInUser.email} </h3>
//         <h3>Your First Name: {loggedInUser.firstName} </h3>
//         <h3>Your Last Name: {loggedInUser.lastName} </h3>
//         <h1>Welcome to HaskyPal {loggedInUser.firstName}!</h1>
//       </form>
//       <p>
//         Go Select one challenge for all quarter  ? Then <Link to="/">login</Link>!
//       </p>
//     </div>
//   )
// }
// export default Dashboard

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import "./RegistrationForm.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);

  // useEffect with dependency on loggedInUser
  useEffect(() => {
    console.log("Dashboard useEffect triggered");
    if (!loggedInUser._id) {
      console.log("User not logged in, navigating to /");
      navigate("/");
    }
  }, [loggedInUser._id]);

  return (
    <div>
      <form action="" className="col-med-4 offset display-info">
        <h3>Your Email: {loggedInUser.email} </h3>
        <h3>Your First Name: {loggedInUser.firstName} </h3>
        <h3>Your Last Name: {loggedInUser.lastName} </h3>
        <h1>Welcome to HaskyPal {loggedInUser.firstName}!</h1>
      </form>
      <p>
        Go Select one challenge for all quarter? Then <Link to="/">login</Link>!
      </p>
    </div>
  );
}

export default Dashboard;
