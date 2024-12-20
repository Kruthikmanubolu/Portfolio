import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Particle from './Components/ParticleComponent';
const App = () => {
  return (
    <div>
      <Particle/>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Education/>
      <Experience/>
      <Skills/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
