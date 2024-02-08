import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Closet from './components/Closet';
import Tracker from './components/Tracker';
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/user/accessories" element={<Closet />} />
            <Route path="/user/level" element={<Tracker />} />
            <Route path="/user/homepage" element={<Homepage />} />
          </Routes>
        </Router>
      {/* <a
        className="Closet-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Closet
      </a>
      <a
        className="Closet-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tracker
      </a> */}
    </div>
  );
}

export default App;
