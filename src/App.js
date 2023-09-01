import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Competitions from "./components/Competitions";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <main className="MainSection">
        <Navbar />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
