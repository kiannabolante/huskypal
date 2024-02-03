import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Closet from './components/Closet';
import Tracker from './components/Tracker';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/user/accessories" element={<Closet />} />
            <Route path="/user/level" element={<Tracker />} />
          </Routes>
        </Router>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        learn react
      </a>
    </div>
  );
}

export default App;
