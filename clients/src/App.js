import './App.css';
import Closet from './components/Closet';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Tracker from './components/Tracker';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user/accessories" element={<Closet/>} />
          <Route path="/user/level" element={<Tracker/>} />
        </Routes>
      </BrowserRouter>
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
