import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Card from './components/Card';
// import { Contact } from 'lucide-react';
const App = () => {
  return (
    <div>
    <Navbar />
      <Hero />
      <Education/>
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
};

export default App;