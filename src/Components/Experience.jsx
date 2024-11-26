import React from "react";
import "../index.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
const Companies = [
  {
    title: "Tata Consultancy Services",
    description: "Engaged in a User Experience(UX) TV application project associated with Comcast.The application is made with a Javascript framework (LightningJS).",
    description1 : "Created a testing application named MIDAS that uses React JS and Express JS. The application is used for testing various TV applications.",
    link: "https://www.amrita.edu/campus/bengaluru/",
    imageUrl: "https://logodix.com/logo/733212.png"
  },
  {
    title: "10X Academy",
    description: "Interacted with students regarding the classes for UI Development and Data Structures. Evaluated their understanding and assigned web development and machine learning projects.",
    description1 : "Led a team to review the performance of students and analyze the weaknesses of a particular student.",
    link: "https://engineering.oregonstate.edu/EECS",
    imageUrl: "https://wallpapercave.com/wp/wp3724674.jpg" 
  },
];

function Experience() {
  return (
    
    <section id="experience" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
    <div className="projects-container">
    <ScrollAnimation animateIn="bounceInLeft">
      <h2 className="projects-heading">Experience</h2>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <div className="Experience-grid-container">
        {Companies.map((company, index) => (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundColor : "white" }} 
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
