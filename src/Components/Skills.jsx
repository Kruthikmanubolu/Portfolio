import React from "react";
import "../index.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
const skills = [
  {
    title: "C",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    imageUrl: "https://static.skillshare.com/uploads/video/thumbnails/b9455fc40a4053509ef0a77b8ddb6a51/original",
    level : 80
  },
  {
    title: "HTML",
    //description: "Master of Engineering in Computer Science",
    link: "https://en.wikipedia.org/wiki/HTML",
    imageUrl: "http://1.bp.blogspot.com/-NGHwBncyA68/UiMm_8b2ZUI/AAAAAAAAAnA/17OGXCKI4zE/s1600/Logo+HTML5.JPG",
    level : 90
  },
  {
    title: "CSS",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/CSS",
    imageUrl: "https://logospng.org/download/css-3/logo-css-3-2048.png",
    level : 70
  },
  {
    title: "Java",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/Java",
    imageUrl: "https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png",
    level : 60
  },
  {
    title: "Javascript",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/JavaScript",
    imageUrl: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png",
    level : 80
  },
  {
    title: "Python",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    imageUrl: "https://logodownload.org/wp-content/uploads/2019/10/python-logo.png",
    level : 85
  },
  {
    title: "SQL",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/SQL",
    imageUrl: "https://logodix.com/logo/542135.jpg",
    level : 90
  },
  {
    title: "NodeJs",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/Node.js",
    imageUrl: "https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png",
    level : 70
  },
  {
    title: "ReactJs",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/React_(software)",
    imageUrl: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    level : 90
  },
  {
    title: "ExpressJs",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/Express.js",
    imageUrl: "https://vectorified.com/images/express-js-icon-20.png",
    level : 60
  },
  {
    title: "LightningJs",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://lightningjs.io/",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7SFS7kl8UMrkdiuryODAg2iPBoVIw9tzASbsPXOmHHqdMxKYFs2hRrbChM76eXJZAo8&usqp=CAU",
    level : 80
  },
  {
    title: "C++",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/C%2B%2B",
    imageUrl: "https://clipart-library.com/image_gallery2/C-PNG-Image.png",
    level : 60
  },
  {
    title: "Blender",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/Blender_(software)",
    imageUrl: "https://logocharts.com/wp-content/uploads/2021/12/Blender-Logo-1600x1308.png",
    level : 70
  },
  {
    title: "R-Programming",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/R_(programming_language)",
    imageUrl: "https://ih1.redbubble.net/image.522704822.2591/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
    level : 60
  },
  {
    title: "Bash",
    //description: "Bachelor of Technology in Computer Science",
    link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
    imageUrl: "https://dwglogo.com/wp-content/uploads/2019/03/1800px-gnu_bash_logo-1024x705.png",
    level : 50
  },

];

function Skills() {
  return (
    
    <section id="skills" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
    <div className="projects-container">
    {/* <ScrollAnimation animateIn="bounceInLeft"> */}
      <h2 className="projects-heading">Skills</h2>
    {/* </ScrollAnimation> */}
    <ScrollAnimation animateIn="bounceInRight">
      <div className="skills-grid-container">
        {skills.map((skill, index) => (
          <a href={skill.link}><div
            key={index}
            className="grid-item"
            style={{ backgroundImage: `url(${skill.imageUrl})` }}
          >
            <div className="overlay">
              <p className="skill-title">{skill.title}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
          </a>
        ))}
      </div>
      </ScrollAnimation>
    </div>
    </section>
  );
}

export default Skills;
