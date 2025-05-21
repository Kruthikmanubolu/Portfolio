import React, { useState, useEffect } from "react";
import "../index.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"
import ReactCardFlip from "react-card-flip";
import image from '../assets/image.jpg'

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
  {
    title: "Expense-Tracker",
    description: "A web application to track expenses",
    link: "https://github.com/Kruthikmanubolu/Expense-Tracker-MERN-Stack",
    imageUrl: "https://sp.yimg.com/ib/th?id=OADD2.7284286246775_1GYGPSM1G91UB9QCEW&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=442&h=231"
  },
  {
    title: "Shopeezy (E-Commerce web application)",
    description: "A full-stack web shopping platform offering seamless product browsing",
    link: "https://github.com/Kruthikmanubolu/Prostore",
    imageUrl: image
  }
];

function Projects() {
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (

    <section id="projects" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="projects-container">
        {/* <ScrollAnimation animateIn="bounceInLeft"> */}
        <h2 className="projects-heading-actual">Projects</h2>
        {/* </ScrollAnimation> */}
        <ScrollAnimation animateIn="bounceInRight">
          <div className="grid-container">
            {projects.map((project, index) => (
              <ReactCardFlip
                isFlipped={flipped[index]}
                flipDirection="horizontal"
                key={index}>
                <div onClick={() => handleFlip(index)}
                  key={index}
                  className="grid-item"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                ><h3 className="overlay">{project.title}</h3></div>
                <div onClick={() => handleFlip(index)} className="overlay">
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="view-project-button">View Project</button>

                  </a>
                  {project.title === "Expense-Tracker" && (
                    <a
                      href="https://expense-mern-stack-frontend.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="view-project-button">Live Demo</button>
                    </a>)}
                  {project.title === "Shopeezy (E-Commerce web application)" && (
                    <a
                      href="https://prostore-nine-drab.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="view-project-button">Live Demo</button>
                    </a>
                  )}
                </div>
              </ReactCardFlip>
            ))}
          </div>

        </ScrollAnimation>
      </div>
    </section>

  );
}

export default Projects;
