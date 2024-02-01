import './App.css';
import Closet from './components/Closet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>
      <Routes>
        <Route path="/accessories" element={<Closet/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
