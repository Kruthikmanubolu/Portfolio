import React from 'react';
import gmailIcon from '../assets/Final_Gmail.png'; 
import linkedinIcon from '../assets/LinkedIn_icon.svg.png';
import githubIcon from '../assets/Octicons-mark-github.svg.png';
import instaIcon from '../assets/Instagram_logo_2022.svg.png';
import resumeFile from '../assets/Resume.pdf'; // Add your resume file path here
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Animated Heading */}
        <ScrollAnimation animateIn="bounceInLeft">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        </ScrollAnimation>
        
        {/* Animated Introductory Text */}
        <ScrollAnimation animateIn="fadeIn">
          <p className="mb-6">I'd love to hear from you! Feel free to reach out to me.</p>
        </ScrollAnimation>

        {/* Social Media Icons */}
        <ScrollAnimation animateIn="fadeIn">
          <div className="flex justify-center space-x-8">
            <a href="mailto:kruthikmanubolu@gmail.com">
              <img
                src={gmailIcon}
                alt="Gmail"
                style={{ width: '60px', height: '60px', marginRight: '20px' }}
                className="hover:opacity-50"
              />
            </a>
            <a href="https://www.linkedin.com/in/kruthik-lakshman-58aa62199/">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                style={{ width: '60px', height: '60px' , marginRight : '20px'}}
                className="hover:opacity-50"
              />
            </a>
            <a href="https://github.com/Kruthikmanubolu">
              <img
                src={githubIcon}
                alt="GitHub"
                style={{ width: '60px', height: '60px' , marginRight : '20px'}}
                className="hover:opacity-50"
              />
            </a>
            <a href="https://www.instagram.com/kruthikmanubolu5154/">
              <img
                src={instaIcon}
                alt="Instagram"
                style={{ width: '60px', height: '60px', marginRight : '20px' }}
                className="hover:opacity-50"
              />
            </a>
          </div>
        </ScrollAnimation>

        {/* Download Resume Button */}
        <ScrollAnimation animateIn="fadeInUp">
          <div className="mt-8">
            <a
              href={resumeFile}
              download="Kruthik_Lakshman_Resume.pdf"
              className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
            >
              My Resume
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
