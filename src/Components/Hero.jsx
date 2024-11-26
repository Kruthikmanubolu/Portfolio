import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Lakshman Kruthik!</h1>
        <p className="mt-4 text-xl">A passionate UI developer creating amazing things with code.</p>
        <a 
          href="#nav" 
          className="mt-6 inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100"
        >
          Me & My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
