import React from 'react';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
const Navbar = () => {
  return (
    <section id='nav'>
    <ScrollAnimation animateIn='fadeIn'>
    <nav className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex gap-x-12">
          <li><a href="#home" smooth = {true} duration = {500} offset = {-50} className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" smooth = {true} duration = {500} offset = {-50} className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" smooth = {true} duration = {500} offset = {-50} className="hover:text-blue-400">Projects</a></li>
          <li><a href="#Education" smooth = {true} duration = {500} offset = {-50} className="hover:text-blue-400">Academics</a></li>
          <li><a href="#experience" smooth = {true} duration = {500} offset = {-50} className="hover:text-blue-400">Experience</a></li>
          <li><a href="#skills" smooth = {true} duration = {500} offset = {-50} className="hover:text-blue-400">Skills</a></li>
          <li><a href="#contact" smooth = {true} duration = {500} offset = {-50} className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
    </ScrollAnimation>
    </section>
  );
};

export default Navbar;
