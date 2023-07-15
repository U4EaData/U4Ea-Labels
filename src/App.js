import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Data from './components/Data';
import NavBar from "./components/NavBar";
import Label from "./components/Label";

function App() {
  return (
      <Router>
          <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
            <Route path="/label" element={<Label />} />
        </Routes>
      </Router>
  );
}

export default App;
