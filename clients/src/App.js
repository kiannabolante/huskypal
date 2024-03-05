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
          <Header handleLogout={() => setLoggedInUser({})} />
          <Routes>
            {/* <Route
              path="/user/pal"
              element={loggedInUser._id ? <TrackPal /> : <Navigate to="/" />}
            /> */}
            <Route path="/user/accessories" element={<Closet />} />
            <Route path="/user/level" element={<Tracker />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/user/todolist" element={<DubsTrack />} />
            <Route
              path="/login"
              element={<LoginForm saveLoggedInUser={saveLoggedInUser} />}
            />{" "}
            <Route
              path="/user/pal"
              element={
                loggedInUser._id !== "" ? (
                  <TrackPal />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/studious" element={<Studious />} />
            <Route path="/foodie" element={<Foodie />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/info" element={<DisplayAll />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
