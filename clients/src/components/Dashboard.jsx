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
      <form action="" className="col-med-4 offset display-info" style={{backgroundColor: "#CEC1FB", padding: "40px", borderRadius: "10px"}}>
        <h3>Thank you for registering with us, {loggedInUser.firstName}!</h3>
        <p>Here is your profile information:</p>
        <h5>Your Email: {loggedInUser.email} </h5>
        <h5>Your First Name: {loggedInUser.firstName} </h5>
        <h5>Your Last Name: {loggedInUser.lastName} </h5>
        <h5>Your Instagram: {loggedInUser.instagram} </h5>

        <p>

        <button type="button" className="button">
        <Link to="/login">Please Login</Link>!
          </button>{" "}
        </p>
      </form>
    </div>
  );
}

export default Dashboard;
