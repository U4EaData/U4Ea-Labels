import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NutritionLabel from './components/NutritionLabel';
import NavBar from "./components/NavBar";

function App() {
  return (
      <Router>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/label" element={<NutritionLabel />} />
        </Routes>
      </Router>
  );
}

export default App;
