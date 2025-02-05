import React from 'react';
import picture from '../assets/groom-83.jpg'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import '../index.css'
const About = () => {
  return (
    
    <section id="about" className="py-20 bg-gray-100">
      
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
      <ScrollAnimation animateIn="bounceInLeft">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src= {picture} 
            alt="Lakshman Kruthik"
            className="rounded-full shadow-lg w-48 h-48 object-cover"
          />
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInRight'>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            Hello! I'm Lakshman Kruthik, a passionate developer with expertise in UI development, OpenGL animations, Blender simulations, and real-time applications. 
            I thrive on solving challenging problems and creating impactful projects that blend technology and creativity. My journey spans multiple domains, 
            from designing interactive graphics to working on machine learning models. I'm always eager to learn and take on new challenges to enhance my skill 
            set and contribute to meaningful projects. Other than my expertise I really enjoy playing tactical shooting games, playing badminton and watching action movies 
            or series.
          </p>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
