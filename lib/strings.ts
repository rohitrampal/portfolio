import { portfolioConfig } from '@/config';

// Centralized strings for all languages
export const strings = {
  // Navigation
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About Us',
    projects: 'Projects',
    skills: 'Skills',
    techStack: 'Tech Stack',
    pricing: 'Pricing',
    clients: 'Clients',
    contact: 'Contact Us',
  },

  // Home Section
  home: {
    title: portfolioConfig.developer.name,
    tagline: portfolioConfig.developer.tagline,
    role: portfolioConfig.developer.role,
    description: 'Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.',
    contactButton: 'Contact',
    availableForWork: 'Available for work',
    hireMe: 'Hire Me',
  },

  // Services Section
  services: {
    title: 'What I Do /',
    subtitle: '(Services)',
    intro: 'I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it\'s for a business, a startup, or a product team.',
    service1: {
      number: '01',
      title: 'Full-Stack Development',
      description: 'From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.',
      tech: ['React, Node.js, Express.js', 'REST APIs, Firebase, Docker', 'Git, GitHub, Postman'],
    },
    service2: {
      number: '02',
      title: 'UI/UX & Frontend',
      description: 'Design is more than looks — it\'s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.',
      tech: ['NextJs, TailwindCSS, GSAP', 'Figma to Code', 'HTML, CSS, JavaScript'],
    },
    service3: {
      number: '03',
      title: 'Optimization',
      description: 'Beyond handling data, I\'m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.',
      tech: ['Data Structures & Algorithms', 'DBMS, OOP, OS Fundamentals', 'Data Pipelines, ETL, and Scalability'],
    },
  },

  // Projects Section
  projects: {
    title: 'SELECTED WORKS /',
    subtitle: '(PROJECTS)',
    description: 'Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.',
  },

  // Skills Section
  skills: {
    title: 'Skills',
    category1: 'Languages & Tools',
    category2: 'Frameworks & Libraries',
    category3: 'Core CS Concepts',
    skillsList: {
      languages: ['Python', 'SQL', 'C++', 'Java', 'TypeScript', 'JavaScript', 'Git', 'Postman', 'Docker', 'Firebase'],
      frameworks: ['React', 'Node.js', 'Express.js', 'Flask', 'Bootstrap', 'jQuery', 'TailwindCSS', 'Framer Motion', 'GSAP'],
      concepts: ['DSA', 'DBMS', 'OOP', 'Operating Systems', 'System Design'],
    },
  },

  // About Section
  about: {
    title: 'About Me',
    description: 'I\'m a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences. I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and TailwindCSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences. Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users\' lives.',
    ourValues: 'Our Values',
  },

  // Tech Stack Section
  techStack: {
    title: 'Tech Stack & Services',
    subtitle: 'Technologies we work with',
    services: 'Our Services',
  },

  // Pricing Section
  pricing: {
    title: 'Pricing Plans',
    subtitle: 'Choose the plan that fits your needs',
    getStarted: 'Get Started',
    popular: 'Popular',
    perProject: 'per project',
  },

  // Clients Section
  clients: {
    title: 'Our Clients',
    subtitle: 'Trusted by startups, agencies, and enterprises globally.',
    testimonial: 'Testimonials',
  },

  // Contact Section
  contact: {
    title: 'Get In Touch',
    subtitle: 'Have a project in mind? Let\'s talk!',
    name: 'Name',
    email: 'Email',
    message: 'Message / Query',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Thank you! Your message has been sent successfully.',
    error: 'Something went wrong. Please try again.',
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email',
    messageRequired: 'Message is required',
  },

  // Footer
  footer: {
    copyright: '© 2024 Portfolio. All rights reserved.',
    builtWith: 'Built with Next.js & Material UI',
  },
};

