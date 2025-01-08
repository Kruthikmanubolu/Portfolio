import React,{useState, useEffect} from "react";
import "../index.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"
import ReactCardFlip from "react-card-flip";
const Companies = [
  {
    title: "Tata Consultancy Services",
    description: "Assistant Systems Engineer",
    description1: "Engaged in a User Experience(UX) TV application project associated with Comcast. The application is made with a Javascript framework (LightningJS). Created a testing application named MIDAS that uses React JS and Express JS. The application is used for testing various TV applications.",
    link: "https://www.amrita.edu/campus/bengaluru/",
    imageUrl: "https://resources.ripplematch.com/hubfs/Tata%20Consultancy%20Services-1.png"
  },
  {
    title: "10X Academy",
    description: "Academic Mentor",
    description1: "Interacted with students regarding the classes for UI Development and Data Structures. Evaluated their understanding and assigned web development and machine learning projects. Led a team to review the performance of students and analyze the weaknesses of a particular student",
    link: "https://engineering.oregonstate.edu/EECS",
    imageUrl: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/10x_academy/original.png?1622233879" 
  },
];

function Experience() {

  const [flipped, setFlipped] = useState(Array(Companies.length).fill(false));
  
    const handleFlip = (index) => {
      const newFlipped = [...flipped];
      newFlipped[index] = !newFlipped[index];
      setFlipped(newFlipped);
    };
  return (
    
    <section id="experience" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
    <div className="projects-container">
    {/* <ScrollAnimation animateIn="bounceInLeft"> */}
      <h2 className="projects-heading">Experience</h2>
    {/* </ScrollAnimation> */}
    <ScrollAnimation animateIn="bounceInRight">
      <div className="Experience-grid-container">
        {Companies.map((company, index) => (
          <ReactCardFlip
          isFlipped={flipped[index]}
          flipDirection="horizontal"
          key={index}>
          <div onClick={() => handleFlip(index)}
            key={index}
            className="grid-item"
            style={{ backgroundImage: `url(${company.imageUrl})`  }} 
          ></div>
            <div onClick={() => handleFlip(index)} className="overlay" >
              <p>{company.description}</p>
              <p>{company.description1}</p>
            </div>
          </ReactCardFlip>
        ))}
      </div>
      
      </ScrollAnimation>
    </div>
    </section>
  );
}

export default Experience;
