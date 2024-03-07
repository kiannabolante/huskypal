import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useNavigate, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrackPal from "./components/TrackPal";
import Closet from "./components/Closet";
import Tracker from "./components/Tracker";
import Homepage from "./components/Homepage";
import DubsTrack from "./components/DubsTrack";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Creative from "./components/Creative";
import Studious from "./components/Studious";
import Foodie from "./components/Foodie";
import UserContext from "./contexts/UserContext.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import DisplayAll from "./components/DisplayAll.js";
import AllAboutUs from "./components/AllAboutUs.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import CreativeTracker from "./components/CreativeMilestone.jsx";
import CreativeCloset from "./components/CreativeCloset.jsx";
import FoodieCloset from "./components/FoodieCloset.jsx";
import FoodieMilestone from "./components/FoodieMilestone.jsx";
import StudiousMilestone from "./components/StudiousMilestone.jsx";
import StudiousCloset from "./components/StudiousCloset.jsx";




function App() {
  // hold user information
  const [loggedInUser, setLoggedInUser] = useState({});
  // SAVE THE USER INFORMATION THAT WE GET FROM THE LOGGED IN USER
  const saveLoggedInUser = (userData) => {
    const userObj = { ...userData, password: "" };
    setLoggedInUser(userObj);
    console.log("User logged in :", userObj);
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ loggedInUser, saveLoggedInUser }}>
        <Router>
          <Header handleLogout={() => setLoggedInUser({})} />
          <Routes>
            {/* <Route
              path="/user/pal"
              element={loggedInUser._id ? <TrackPal /> : <Navigate to="/" />}
            /> */}
            <Route path="/home" element={<Homepage />} />
            <Route
              path="/login"
              element={<LoginForm saveLoggedInUser={saveLoggedInUser} />}
            />{" "}
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/pal" element={<TrackPal />} />

            {/* creative track links */}
            <Route path="/creative" element={<Creative />} />
            <Route path="/creative/milestone" element={<CreativeTracker />} />
            <Route path="/creative/closet" element={<CreativeCloset />} />

            {/* athletic track links */}
            <Route path="/athletic" element={<DubsTrack />} />
            <Route path="/athletic/milestone" element={<Tracker />} />
            <Route path="/athletic/closet" element={<Closet />} />

            {/* foodie track links */}
            <Route path="/foodie" element={<Foodie />} />
            <Route path="/foodie/milestone" element={<FoodieMilestone />} />
            <Route path="/foodie/closet" element={<FoodieCloset />} />

            {/* studious track links */}
            <Route path="/studious" element={<Studious />} />
            <Route path="/studious/milestone" element={<StudiousMilestone />} />
            <Route path="/studious/closet" element={<StudiousCloset />} />


            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/info" element={<DisplayAll />} />
            <Route path="/about/us" element={<AllAboutUs />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;