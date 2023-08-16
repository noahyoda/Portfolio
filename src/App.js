import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
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
