import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import personalData from '../../data/personalData';

const Home = () => {
  const { name, title, description, contact } = personalData;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <section id="home" className="home">
      <div className="container">
        <motion.div 
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="home-text" variants={itemVariants}>
            <h1>
              Hello, I'm <span>{name}</span>
            </h1>
            <h2>{title}</h2>
            <p>{description}</p>
            
            <div className="cta-buttons">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
            
            <div className="social-icons">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="home-image"
            variants={itemVariants}
          >
            <img 
              src="/assets/images/profile.jpg" 
              alt={name} 
              className="profile-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/350?text=Alex+Morgan';
              }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#skills">
            <FaArrowDown />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
