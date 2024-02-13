import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrackPal from "./components/TrackPal";
import Closet from "./components/Closet";
import Tracker from "./components/Tracker";
import Homepage from "./components/Homepage";
import DubsTrack from "./components/DubsTrack";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/user/pal" element={<TrackPal />} />
          <Route path="/user/accessories" element={<Closet />} />
          <Route path="/user/level" element={<Tracker />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/user/todolist" element={<DubsTrack />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;