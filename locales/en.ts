// English locale - Base language with all content

export interface LocaleData {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    projects: string;
    skills: string;
    techStack: string;
    pricing: string;
    clients: string;
    contact: string;
  };

  // Home Section
  home: {
    name: string;
    tagline: string;
    role: string;
    description: string;
    contactButton: string;
    availableForWork: string;
    hireMe: string;
  };

  // Services Section
  services: {
    title: string;
    subtitle: string;
    intro: string;
    service1: {
      number: string;
      title: string;
      description: string;
      tech: string[];
    };
    service2: {
      number: string;
      title: string;
      description: string;
      tech: string[];
    };
    service3: {
      number: string;
      title: string;
      description: string;
      tech: string[];
    };
  };

  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    description: string;
    viewProject: string;
    items: Array<{
      id: string;
      name: string;
      description: string;
      technologies: string[];
      image?: string;
      link?: string;
    }>;
  };

  // Skills Section
  skills: {
    title: string;
    category1: string;
    category2: string;
    category3: string;
    skillsList: {
      languages: string[];
      frameworks: string[];
      concepts: string[];
    };
  };

  // About Section
  about: {
    title: string;
    description: string;
    ourValues: string;
    values: string[];
    developerSkills: string[];
  };

  // Tech Stack Section
  techStack: {
    title: string;
    subtitle: string;
    services: string;
    items: Array<{
      name: string;
      icon?: string;
      category: 'frontend' | 'backend' | 'database' | 'tool' | 'other' | 'analytics';
    }>;
    servicesList: string[];
  };

  // Pricing Section
  pricing: {
    title: string;
    subtitle: string;
    getStarted: string;
    popular: string;
    perProject: string;
    plans: Array<{
      id: string;
      name: string;
      price: string;
      features: string[];
      popular?: boolean;
    }>;
  };

  // Clients Section
  clients: {
    title: string;
    subtitle: string;
    testimonial: string;
    items: Array<{
      id: string;
      name: string;
      logo?: string;
      testimonial?: string;
      role?: string;
    }>;
  };

  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    info: {
      email: string;
      phone?: string;
      address?: string;
      social: {
        linkedin?: string;
        github?: string;
        twitter?: string;
      };
    };
  };

  // Footer
  footer: {
    copyright: string;
    builtWith: string;
  };
}

export const en: LocaleData = {
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
    name: 'Freshdev',
    tagline: 'Full-Stack Developer & Digital Innovator',
    role: 'Senior Software Engineer',
    description: 'Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.',
    contactButton: 'Contact',
    availableForWork: 'Available for work',
    hireMe: 'Hire Me',
  },

  // Services Section
  services: {
    title: 'What We Do',
    subtitle: '(Services)',
    intro: 'We specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, we help bring ideas to life whether it\'s for a business, a startup, or a product team.',
    service1: {
      number: '01',
      title: 'Full-Stack Development',
      description: 'From frontend interactions to backend APIs, we build complete web solutions. We work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.',
      tech: ['React, Node.js, Express.js, Next.js, Nest.js, FastAPI', 'REST APIs, Firebase, Docker', 'Git, GitHub, Postman'],
    },
    service2: {
      number: '02',
      title: 'UI/UX & Frontend',
      description: 'Design is more than looks — it\'s about clarity and connection. We design and develop clean, responsive interfaces that feel intuitive across devices. Our focus is on clarity, accessibility, and seamless user experiences.',
      tech: ['NextJs, TailwindCSS, GSAP', 'Figma to Code', 'HTML, CSS, JavaScript'],
    },
    service3: {
      number: '03',
      title: 'Optimization',
      description: 'Beyond handling data, we are driven by the challenge of turning complex raw inputs into reliable, usable systems. We enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.',
      tech: ['Data Structures & Algorithms', 'DBMS, OOP, OS Fundamentals', 'Data Pipelines, ETL, and Scalability'],
    },
  },

  // Projects Section
  projects: {
    title: 'SELECTED WORKS /',
    subtitle: '(PROJECTS)',
    description: 'Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.',
    viewProject: 'View Project',
    items: [
      {
        id: '1',
        name: 'Zaps Travel',
        description: 'A full-scale travel booking ecosystem enabling users to search, compare, and book flights and hotels in real time. The platform integrates secure payment gateways, third-party travel APIs, and dynamic pricing modules, offering a seamless booking experience with modern UI/UX and optimized backend workflows. zpastravel.com',
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Payment Integration', 'Third-party APIs'],
      },
      {
        id: '2',
        name: 'Appointment Management System (SaaS)',
        description: 'A cloud-based, real-time appointment scheduling SaaS with advanced calendar management, automated reminders, and multi-user booking capabilities. The system supports API integrations for third-party apps and provides an administrative dashboard for analytics, staff management, and customer insights.',
        technologies: ['React', 'Node.js', 'Zustand', 'PostgreSQL', 'API Integrations'],
      },
      {
        id: '3',
        name: 'Krew (Multi-Tenant SaaS)',
        description: 'A robust multi-tenant SaaS architecture built for enterprises, supporting complete tenant isolation, real-time updates via WebSockets, and dynamic workspace creation. The platform includes tenant-specific access control, scalable onboarding, and high-performance data segregation to ensure security and seamless collaboration.',
        technologies: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
      },
      {
        id: '4',
        name: 'School Management System (SaaS)',
        description: 'A feature-rich ERP platform for educational institutions, offering role-based access, attendance automation, exam & grade management, fee tracking, and performance analytics. The system centralizes school operations with a user-friendly interface and scalable backend optimized for SaaS deployment.',
        technologies: ['React', 'Node.js', 'Zustand', 'PostgreSQL'],
      },
      {
        id: '5',
        name: 'Jua Hotel',
        description: 'A modern and intuitive hotel booking platform designed for smooth reservation flow. It includes room availability management, user-friendly search filters, and interactive booking steps using modular UI components and custom React hooks for enhanced maintainability and performance.',
        technologies: ['React', 'Redux', 'Custom Hooks', 'Python', 'Django'],
      },
      {
        id: '6',
        name: 'Facility Management System (SaaS)',
        description: 'An advanced SaaS solution for facility operations featuring 3D interactive space visualization using Three.js. The platform enables asset tracking, maintenance scheduling, resource allocation, and real-time monitoring, giving organizations a holistic view of their facilities through an immersive UI.',
        technologies: ['React', 'Three.js', 'Zustand'],
      },
      {
        id: '7',
        name: 'FATCA/CRS File Upload System',
        description: 'A secure and compliance-focused document processing system for FATCA/CRS filings. It ensures encrypted file upload, automated validation, format standardization, and real-time error reporting. Built to meet regulatory standards, the system improves accuracy and speeds up compliance workflows.',
        technologies: ['React'],
      },
    ],
  },

  // Skills Section
  skills: {
    title: 'Skills',
    category1: 'Languages & Tools',
    category2: 'Frameworks & Libraries',
    category3: 'Core CS Concepts',
    skillsList: {
      languages: ['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'Java'],
      frameworks: ['React', 'Node.js', 'Express.js', 'Next.js', 'Nest.js', 'Django', 'FastAPI'],
      concepts: ['DSA', 'DBMS', 'OOP', 'Operating Systems', 'System Design'],
    },
  },

  // About Section
  about: {
    title: 'About Us',
    description: 'We are a team of passionate freelancers who follow Agile methodology to deliver efficient, reliable, and high-quality solutions that satisfy client requirements and are always delivered on time. Our focus is on scalability, performance, and exceptional client experience.',
    ourValues: 'Our Values',
    values: [
      'Agile Methodology',
      'Quality Assurance',
      'On-Time Delivery',
      'Client Satisfaction',
      'Scalable Solutions',
    ],
    developerSkills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
  },

  // Tech Stack Section
  techStack: {
    title: 'Tech Stack & Services',
    subtitle: 'Technologies we work with',
    services: 'Our Services',
    items: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Material UI', category: 'frontend' },
      { name: 'TailwindCSS', category: 'frontend' },
      { name: 'Zustand', category: 'frontend' },
      { name: 'Redux', category: 'frontend' },
      { name: 'Three.js', category: 'frontend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Express', category: 'backend' },
      { name: 'WebSocket', category: 'backend' },
      { name: 'REST API', category: 'backend' },
      { name: 'GraphQL', category: 'backend' },
      { name: 'Microservices', category: 'backend' },
      { name: 'Python', category: 'backend' },
      { name: 'Django', category: 'backend' },
      { name: 'API Integration', category: 'other' },
      { name: 'Agile Methodology', category: 'other' },
      { name: 'Payment Integration', category: 'other' },
      { name: 'Analytics', category: 'analytics' },
      { name: 'Reporting', category: 'analytics' },
      { name: 'Dashboards', category: 'analytics' },
      { name: 'Data Visualization', category: 'analytics' },
      { name: 'Git', category: 'tool' },
      { name: 'Postman', category: 'tool' },
      { name: 'Docker', category: 'tool' },
      { name: 'Firebase', category: 'tool' },
      { name: 'AWS', category: 'tool' },
      { name: 'GCP', category: 'tool' },
      { name: 'GitLab', category: 'tool' },
      { name: 'GitHub', category: 'tool' },
      { name: 'Bitbucket', category: 'tool' },
      { name: 'Jira', category: 'tool' },
      { name: 'Power BI', category: 'tool' },
    ],
    servicesList: [
      'Web Development',
      'Full-Stack Solutions',
      'SaaS Development',
      'API Integration',
      'Database Design',
      'UI/UX Design',
      'Performance Optimization',
      'Cloud Deployment',
    ],
  },

  // Pricing Section
  pricing: {
    title: 'Pricing Plans',
    subtitle: 'Choose the plan that fits your needs',
    getStarted: 'Get Started',
    popular: 'Popular',
    perProject: 'per project',
    plans: [
      {
        id: 'basic',
        name: 'Basic',
        price: '$999',
        features: [
          'Up to 5 pages',
          'Responsive Design',
          'Basic SEO',
          'Email Support',
          '1 Month Support',
        ],
      },
      {
        id: 'standard',
        name: 'Standard',
        price: '$2,499',
        popular: true,
        features: [
          'Up to 15 pages',
          'Responsive Design',
          'Advanced SEO',
          'CMS Integration',
          'Priority Support',
          '3 Months Support',
          'Performance Optimization',
        ],
      },
      {
        id: 'premium',
        name: 'Premium',
        price: '$4,999',
        features: [
          'Unlimited Pages',
          'Custom Design',
          'Advanced SEO',
          'Full CMS',
          '24/7 Support',
          '6 Months Support',
          'Performance Optimization',
          'Security Audit',
          'Analytics Setup',
        ],
      },
    ],
  },

  // Clients Section
  clients: {
    title: 'Our Clients',
    subtitle: 'Trusted by startups, agencies, and enterprises globally.',
    testimonial: 'Testimonials',
    items: [
      {
        id: '1',
        name: 'TechCorp',
        testimonial: 'Outstanding work! They delivered exactly what we needed on time and within budget.',
        role: 'CEO',
      },
      {
        id: '2',
        name: 'StartupXYZ',
        testimonial: 'Professional team with deep technical expertise. Highly recommended!',
        role: 'Founder',
      },
      {
        id: '3',
        name: 'Enterprise Solutions',
        testimonial: 'The best development partner we\'ve worked with. Exceeded our expectations.',
        role: 'CTO',
      },
      {
        id: '4',
        name: 'Digital Agency',
        testimonial: 'Reliable, efficient, and always delivers quality work.',
        role: 'Director',
      },
    ],
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
    info: {
      email: 'thakurrohit210302@gmail.com',
      phone: '+91 9818000000',
      address: 'Chandigarh, India',
      social: {
        linkedin: 'https://linkedin.com/in/amishajain14',
        github: 'https://github.com/rohitrampal',
        twitter: 'https://twitter.com/',
      },
    },
  },

  // Footer
  footer: {
    copyright: '© 2025 Portfolio. All rights reserved.',
    builtWith: 'Having Fun With Creative Minds',
  },
};

