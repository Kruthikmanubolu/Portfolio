import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <section id='nav'>
      <ScrollAnimation animateIn='fadeIn'>
        <nav className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex gap-x-12">
              <li><Link to="home" smooth={true} duration={500} offset={-100} className="hover:text-blue-400 cursor-pointer">Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} offset={-50} className="hover:text-blue-400 cursor-pointer">About</Link></li>
              <li><Link to="projects" smooth={true} duration={500} offset={-10} className="hover:text-blue-400 cursor-pointer">Projects</Link></li>
              <li><Link to="Education" smooth={true} duration={500} offset={-200} className="hover:text-blue-400 cursor-pointer">Academics</Link></li>
              <li><Link to="experience" smooth={true} duration={500} offset={-100} className="hover:text-blue-400 cursor-pointer">Experience</Link></li>
              <li><Link to="skills" smooth={true} duration={500} offset={-80} className="hover:text-blue-400 cursor-pointer">Skills</Link></li>
              <li><Link to="contact" smooth={true} duration={500} offset={-120} className="hover:text-blue-400 cursor-pointer">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </ScrollAnimation>
    </section>
  );
};

export default Navbar;
