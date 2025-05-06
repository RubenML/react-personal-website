import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, 
  FaGitAlt, FaDocker, FaAws, FaFigma 
} from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import personalData from '../../data/personalData';

const Skills = () => {
  const { skills } = personalData;
  
  // Map icon names to actual icon components
  const getIcon = (iconName) => {
    const iconMap = {
      'react': <FaReact />,
      'js': <FaJs />,
      'html5': <FaHtml5 />,
      'css3': <FaCss3Alt />,
      'node': <FaNodeJs />,
      'express': <SiExpress />,
      'mongodb': <SiMongodb />,
      'database': <FaDatabase />,
      'git': <FaGitAlt />,
      'docker': <FaDocker />,
      'aws': <FaAws />,
      'figma': <FaFigma />,
    };
    
    return iconMap[iconName] || <FaReact />;
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <motion.div 
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category card"
              variants={itemVariants}
            >
              <h3>{category.name}</h3>
              
              <div className="skill-list">
                {category.items.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-icon">
                      {getIcon(skill.icon)}
                    </div>
                    
                    <div className="skill-info">
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-level-bar">
                        <motion.div 
                          className="skill-level-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
