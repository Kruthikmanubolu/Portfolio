import React from "react";
import "../index.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
const Colleges = [
 
  {
    title: "Oregon State University",
    description: "Master of Engineering in Computer Science",
    link: "https://engineering.oregonstate.edu/EECS",
    imageUrl: "https://wallpapercave.com/wp/wp3724674.jpg", 
    gpa: "GPA - 3.91"
  },
  {
    title: "Amrita Vishwa Vidhyapeetham",
    description: "Bachelor of Technology in Computer Science",
    link: "https://www.amrita.edu/campus/bengaluru/",
    imageUrl: "https://amritatec.in/images/university.jpg",
    gpa: "CGPA - 7.26"
  }
];

function Education() {
  return (
    
    <section id="Education" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
    <div className="projects-container">
    {/* <ScrollAnimation animateIn="bounceInLeft"> */}
      <h2 className="Academics-heading">Academics</h2>
    {/* </ScrollAnimation> */}
    <ScrollAnimation animateIn="bounceInRight">
      <div className="Academic-grid-container">
        {Colleges.map((college, index) => (
        <div
            key={index}
            className="grid-item"
            style={{ backgroundImage: `url(${college.imageUrl})` }} 
          >
            <div className="overlay" >
              <h3>{college.title}</h3>
              <p>{college.description}</p>
              <p>{college.gpa}</p>
            </div>
          </div>
        ))}
      </div>
      </ScrollAnimation>
    </div>
    </section>
    
  );
}

export default Education;
