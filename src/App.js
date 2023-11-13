
import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Textarea from './components/Textarea';
import About from './components/about';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode == 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }

    else {
      setmode('light');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }
  return (
    <>

      <Router>
        <nav>
          <div className="logo">
            <h1>Koo Editor</h1>
          </div>
          <ul>
            <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
            <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
          </ul>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={togglemode}/>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Textarea />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
