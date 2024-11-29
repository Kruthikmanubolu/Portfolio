import React from "react";
import "../index.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
const Companies = [
  {
    title: "Tata Consultancy Services",
    description: "UI developer",
    link: "https://www.amrita.edu/campus/bengaluru/",
    imageUrl: "https://resources.ripplematch.com/hubfs/Tata%20Consultancy%20Services-1.png"
  },
  {
    title: "10X Academy",
    description: "Academic Mentor",
    link: "https://engineering.oregonstate.edu/EECS",
    imageUrl: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/10x_academy/original.png?1622233879" 
  },
];

function Experience() {
  return (
    
    <section id="experience" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
    <div className="projects-container">
    <ScrollAnimation animateIn="bounceInLeft">
      <h2 className="projects-heading">Experience</h2>
    </ScrollAnimation>
    <ScrollAnimation animateIn="bounceInRight">
      <div className="Experience-grid-container">
        {Companies.map((company, index) => (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundImage: `url(${company.imageUrl})`  }} 
          >
            <div className="overlay" >
              <h2>{company.title}</h2>
              <p>{company.description}</p>
              <p>{company.description1}</p>
            </div>
          </div>
        ))}
      </div>
      </ScrollAnimation>
    </div>
    </section>
  );
}

export default Experience;
