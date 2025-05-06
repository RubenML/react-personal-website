import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import personalData from '../../data/personalData';

const Education = () => {
  const { education, experience } = personalData;
  
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
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="education-experience-content">
          {/* Education Timeline */}
          <motion.div 
            className="timeline education-timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="timeline-title">
              <FaGraduationCap /> Education
            </h3>
            
            {education.map((item, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-content card">
                  <h4>{item.degree}</h4>
                  <h5>{item.institution}</h5>
                  <div className="timeline-info">
                    <span>
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                    <span>
                      <FaCalendarAlt /> {item.period}
                    </span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Work Experience Timeline */}
          <motion.div 
            className="timeline experience-timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="timeline-title">
              <FaBriefcase /> Work Experience
            </h3>
            
            {experience.map((item, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-content card">
                  <h4>{item.position}</h4>
                  <h5>{item.company}</h5>
                  <div className="timeline-info">
                    <span>
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                    <span>
                      <FaCalendarAlt /> {item.period}
                    </span>
                  </div>
                  <p>{item.description}</p>
                  
                  {item.achievements && (
                    <div className="achievements">
                      <h6>Key Achievements:</h6>
                      <ul>
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
