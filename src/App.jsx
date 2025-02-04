import React, { useState, useEffect } from 'react';
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
import Hero_Mobile from './Components/Hero_Mobile';

const App = () => {
  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Set the initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileView ? <Hero_Mobile/> :  (
    <div>
      <Particle />
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
