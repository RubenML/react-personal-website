const personalData = {
  // Basic personal info
  name: "Alex Morgan",
  title: "Full Stack Developer",
  description: "I'm a passionate full stack developer with a focus on creating intuitive and responsive web applications. With expertise in modern JavaScript frameworks and a strong foundation in backend development, I deliver comprehensive solutions that combine functionality, performance, and user experience.",
  
  // Skills section organized by categories
  skills: [
    {
      name: "Frontend Development",
      items: [
        {
          name: "React.js",
          icon: "react",
          level: 95
        },
        {
          name: "JavaScript",
          icon: "js",
          level: 90
        },
        {
          name: "HTML5",
          icon: "html5",
          level: 95
        },
        {
          name: "CSS3 / SASS",
          icon: "css3",
          level: 90
        }
      ]
    },
    {
      name: "Backend Development",
      items: [
        {
          name: "Node.js",
          icon: "node",
          level: 85
        },
        {
          name: "Express.js",
          icon: "express",
          level: 80
        },
        {
          name: "MongoDB",
          icon: "mongodb",
          level: 75
        },
        {
          name: "SQL Databases",
          icon: "database",
          level: 70
        }
      ]
    },
    {
      name: "Tools & Technologies",
      items: [
        {
          name: "Git / GitHub",
          icon: "git",
          level: 85
        },
        {
          name: "Docker",
          icon: "docker",
          level: 65
        },
        {
          name: "AWS",
          icon: "aws",
          level: 60
        },
        {
          name: "UI/UX Design",
          icon: "figma",
          level: 70
        }
      ]
    }
  ],

  // Education history
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Palo Alto, CA",
      period: "2017 - 2019",
      description: "Specialized in Software Engineering and Artificial Intelligence. Completed thesis on 'Real-time Data Processing Systems in Web Applications'."
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      period: "2013 - 2017",
      description: "Graduated with honors. Focused on web technologies and software development methodologies."
    }
  ],

  // Work experience
  experience: [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: "Leading the development of enterprise-level web applications using React.js, Node.js, and MongoDB. Working in an Agile team environment to deliver high-quality software solutions.",
      achievements: [
        "Architected and developed a microservices-based platform that improved system scalability by 40%",
        "Led the migration from legacy code to a modern React-based frontend, reducing load times by 60%",
        "Implemented CI/CD pipelines that reduced deployment time by 70%"
      ]
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions LLC",
      location: "Boston, MA",
      period: "2019 - 2021",
      description: "Developed and maintained full-stack web applications for various clients in the finance and healthcare sectors.",
      achievements: [
        "Built a secure patient portal system used by over 50,000 users",
        "Optimized database queries that improved application performance by 35%",
        "Contributed to open-source projects to improve company tech stack"
      ]
    },
    {
      position: "Web Development Intern",
      company: "Startup Accelerator",
      location: "New York, NY",
      period: "Summer 2018",
      description: "Assisted in developing frontend components for early-stage startups. Worked directly with founders to implement design requirements."
    }
  ],

  // Project portfolio
  projects: [],
  
  // Contact information
  contact: {
    email: "alex.morgan@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
    twitter: "https://twitter.com/alexmorgan"
  }
};

export default personalData;
