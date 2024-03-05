import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import "./RegistrationForm.css";


const Dashboard = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);

  // // useEffect with dependency on loggedInUser
  useEffect(() => {
    console.log("Dashboard useEffect triggered");
    console.log("loggedInUser:", loggedInUser);
    if (!loggedInUser._id) {
      console.log("User not logged in, navigating to /");
      navigate("/");
    }
  }, [loggedInUser._id]);

  return (
    <div>
      <form action="" className="col-med-4 offset display-info">
        <h2>THANK YOU FOR REGISTERING WITH US {loggedInUser.firstName}!</h2>
        <p>here is your information</p>
        <h3>Your Email: {loggedInUser.email} </h3>
        <h3>Your First Name: {loggedInUser.firstName} </h3>
        <h3>Your Last Name: {loggedInUser.lastName} </h3>

        <p>
          <Link to="/login">go login</Link>!
        </p>
        {/* <h1>Welcome to HaskyPal {loggedInUser.firstName}!</h1> */}
      </form>

      {/* <h2>Welcome to HuskyPal: Discover UW with Your Virtual Companion!</h2>
      <p>HuskyPal is your personalized guide to exploring the University of Washington.
        Start each quarter by picking a trait for your HuskyPal, like adventurous or studious,
        and get ready for a series of exciting challenges. From walking trails to attending events,
        each activity is a step towards discovering what UW has to offer.</p>

      <h2>Customize Your Journey</h2>
      <p>As you complete challenges, you'll level up and unlock accessories for your HuskyPal,
        making your virtual companion uniquely yours. Finish all your challenges for the quarter,
        and you'll earn an exclusive reward.</p>

      <h4>Connect and Share</h4>
      <p>HuskyPal isn't just for solo adventures; it's a way to connect with other students.
        Share your experiences and take on challenges together, enriching your UW experience.</p>

      <h5>Get Started</h5>
      <p>Join HuskyPal today and turn your UW journey into an adventure filled with discovery,
        growth, and community. Your HuskyPal is ready to explore with you!</p>

      <p>
        Go Select one challenge for all quarter? Then <Link to="/">login</Link>!
      </p> */}
    </div>
  );
}

export default Dashboard;
