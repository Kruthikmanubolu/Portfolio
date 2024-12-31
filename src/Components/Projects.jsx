import React from "react";
import "../index.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"
import ReactCardFlip from "react-card-flip";

const projects = [
  {
    title: "Computer Graphics (OpenGL)",
    description: "Various projects in creating graphics using OpenGL with C++.",
    link: "https://github.com/Kruthikmanubolu/Computer-Graphics",
    imageUrl: "https://i.ytimg.com/vi/eHeBND_T8UY/maxresdefault.jpg" 
  },
  {
    title: "Penalty ShootOut Animation",
    description: "Simulating penalty shootout with three scenarios using Blender.",
    link: "https://github.com/Kruthikmanubolu/Penalty-Shootout-Animation",
    imageUrl: "https://theanalyst.com/wp-content/uploads/2021/08/does-a-penalty-shootout-victory-count-as-a-win-scaled.jpg" 
  },
  {
    title: "Drowsy Eye Detection",
    description: "A real-time drowsiness detection system using OpenCV with a live video feed.",
    link: "https://github.com/Kruthikmanubolu/DrowsyEye-Detection",
    imageUrl: "https://caradas.com/wp-content/uploads/2022/03/Understanding-ADAS-Driver-Attention-Warning-Drowsiness-Detection-1-1024x683.jpeg" 
  },
  {
    title: "Plant Disease Detection",
    description: "Detection of plant diseases and classification into respective disease categories.",
    link: "https://github.com/Kruthikmanubolu/Plant-Disease-Detection",
    imageUrl: "https://jooinn.com/images/corn-field-1.jpg" 
  },
  {
    title: "Airline Reservation System",
    description: "A web application where users can book flight tickets.",
    link: "https://github.com/Kruthikmanubolu/Airline-Reservation-System",
    imageUrl: "https://wallpaperaccess.com/full/1968255.jpg" 
  },
  {
    title: "MIA-Testing",
    description: "A project testing the effectiveness of Membership Inference Attacks.",
    link: "https://github.com/Kruthikmanubolu/Membership-Inference-Attack",
    imageUrl: "https://wallpapercave.com/wp/wp2691421.jpg" 
  },
];

function Projects() {

  
  return (
    
    <section id="projects" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
    <div className="projects-container">
    {/* <ScrollAnimation animateIn="bounceInLeft"> */}
      <h2 className="projects-heading-actual">Projects</h2>
    {/* </ScrollAnimation> */}
    <ScrollAnimation animateIn="bounceInRight">
      <div className="grid-container">
        {projects.map((project, index) => (
          <a href={project.link}><div
            key={index}
            className="grid-item"
            style={{ backgroundImage: `url(${project.imageUrl})` }} 
          >
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div></a>
        ))}
      </div>
      </ScrollAnimation>
    </div>
    </section>
    
  );
}

export default Projects;
