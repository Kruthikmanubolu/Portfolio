import React from 'react';
import gmailIcon from '../assets/gmail.svg'; 
import linkedinIcon from '../assets/LinkedIn_icon.svg.png';
import githubIcon from '../assets/Octicons-mark-github.svg.png'
import instaIcon from '../assets/Instagram_logo_2022.svg.png'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
const Contact = () => {
  return (
    
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
      <ScrollAnimation animateIn='bounceInLeft'>
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn'>
        <p className="mb-6">I'd love to hear from you! Feel free to reach out to me.</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn'>
      <div className="flex justify-center space-x-100">
  <a href="mailto:kruthikmanubolu@gmail.com" style={{ marginRight: '20px' }}>
    <img
      src={gmailIcon}
      alt="Gmail"
      style={{ width: '60px', height: '60px' }}
      className="hover:opacity-50"
    />
  </a>
  <a href="https://www.linkedin.com/in/kruthik-lakshman-58aa62199/" style={{ marginRight: '20px' }}>
    <img
      src={linkedinIcon}
      alt="LinkedIn"
      style={{ width: '60px', height: '60px' }}
      className="hover:opacity-50"
    />
  </a>
  <a href="https://github.com/Kruthikmanubolu" style={{ marginRight: '20px' }}>
    <img
      src={githubIcon}
      alt="GitHub"
      style={{ width: '60px', height: '60px' }} 
      className="hover:opacity-50"
    />
  </a>

  <a href="https://www.instagram.com/kruthikmanubolu5154/" style={{ marginRight: '20px' }}>
    <img
      src={instaIcon}
      alt="Instagram"
      style={{ width: '60px', height: '60px' }} 
      className="hover:opacity-50"
    />
  </a>
</div>
</ScrollAnimation>

      </div>
    </section>
  );
};

export default Contact;
