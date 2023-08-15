import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <main className="MainSection">
        <Navbar />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
