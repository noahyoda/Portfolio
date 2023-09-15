import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.js"
import Experiments from './pages/Experiments';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/*
          example other page
          <Route path='/about' element={About />} />
         */
        <Route path='/experiments' element={<Experiments />} />
         }
      </Routes>
    </Router>
  );
}

export default App;
