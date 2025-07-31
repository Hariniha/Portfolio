import React, { createContext, useContext, useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';



function App() {
  

  return (
    
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 transition-colors duration-500">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </div>
  );
}

export default App;
