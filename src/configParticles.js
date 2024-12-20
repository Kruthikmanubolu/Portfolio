// src/config/particlesConfig.js

const particlesConfig = {
        "homepage": ".",
        "name": "portfolio",
        "private": true,
        "version": "0.0.0",
        "type": "module",
        "scripts": {
          "dev": "vite",
          "build": "vite build",
          "lint": "eslint .",
          "preview": "vite preview",
          "predeploy": "npm run build",
          "deploy": "gh-pages -d dist"
        },
        "dependencies": {
          "@fortawesome/fontawesome-svg-core": "^6.7.1",
          "@fortawesome/free-brands-svg-icons": "^6.7.1",
          "@fortawesome/react-fontawesome": "^0.2.2",
          "animate.css": "^4.1.1",
          "gh-pages": "^6.2.0",
          "react": "^18.3.1",
          "react-animate-on-scroll": "^2.1.9",
          "react-dom": "^18.3.1",
          "react-particle-js": "^1.0.1",
          "react-scroll": "^1.9.0",
          "swipe": "^1.7.7",
          "swiper": "^11.1.15"
        },
        "devDependencies": {
          "@eslint/js": "^9.13.0",
          "@types/react": "^18.3.12",
          "@types/react-dom": "^18.3.1",
          "@vitejs/plugin-react": "^4.3.3",
          "eslint": "^9.13.0",
          "eslint-plugin-react": "^7.37.2",
          "eslint-plugin-react-hooks": "^5.0.0",
          "eslint-plugin-react-refresh": "^0.4.14",
          "globals": "^15.11.0",
          "vite": "^5.4.10"
        }
      
  };
  
  export default particlesConfig;
  