export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export interface TechStack {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'other' | 'analytics';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
  testimonial?: string;
  role?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface PortfolioConfig {
  developer: {
    name: string;
    tagline: string;
    role: string;
    bio: string;
    skills: string[];
  };
  about: {
    title: string;
    description: string;
    values: string[];
  };
  projects: Project[];
  techStack: TechStack[];
  services: string[];
  pricing: PricingPlan[];
  clients: Client[];
  contact: ContactInfo;
  theme: {
    light: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    dark: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  };
}

export const portfolioConfig: PortfolioConfig = {
  developer: {
    name: "",
    tagline: "Full-Stack Developer & Digital Innovator",
    role: "Senior Software Engineer",
    bio: "Passionate about creating scalable, high-performance web applications.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"]
  },
  about: {
    title: "About Us",
    description: "We are a team of passionate freelancers who follow Agile methodology to deliver efficient, reliable, and high-quality solutions that satisfy client requirements and are always delivered on time. Our focus is on scalability, performance, and exceptional client experience.",
    values: [
      "Agile Methodology",
      "Quality Assurance",
      "On-Time Delivery",
      "Client Satisfaction",
      "Scalable Solutions"
    ]
  },
  projects: [
    {
      id: "1",
      name: "Zaps Travel",
      description: "A full-scale travel booking ecosystem enabling users to search, compare, and book flights and hotels in real time. The platform integrates secure payment gateways, third-party travel APIs, and dynamic pricing modules, offering a seamless booking experience with modern UI/UX and optimized backend workflows. zpastravel.com",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Payment Integration", "Third-party APIs"],
    },
    {
      id: "2",
      name: "Appointment Management System (SaaS)",
      description: "A cloud-based, real-time appointment scheduling SaaS with advanced calendar management, automated reminders, and multi-user booking capabilities. The system supports API integrations for third-party apps and provides an administrative dashboard for analytics, staff management, and customer insights.",
      technologies: ["React", "Node.js", "Zustand", "PostgreSQL", "API Integrations"],
    },
    {
      id: "3",
      name: "Krew (Multi-Tenant SaaS)",
      description: "A robust multi-tenant SaaS architecture built for enterprises, supporting complete tenant isolation, real-time updates via WebSockets, and dynamic workspace creation. The platform includes tenant-specific access control, scalable onboarding, and high-performance data segregation to ensure security and seamless collaboration.",
      technologies: ["React", "Node.js", "WebSockets", "MongoDB"],
    },
    {
      id: "4",
      name: "School Management System (SaaS)",
      description: "A feature-rich ERP platform for educational institutions, offering role-based access, attendance automation, exam & grade management, fee tracking, and performance analytics. The system centralizes school operations with a user-friendly interface and scalable backend optimized for SaaS deployment.",
      technologies: ["React", "Node.js", "Zustand", "PostgreSQL"],
    },
    {
      id: "5",
      name: "Jua Hotel",
      description: "A modern and intuitive hotel booking platform designed for smooth reservation flow. It includes room availability management, user-friendly search filters, and interactive booking steps using modular UI components and custom React hooks for enhanced maintainability and performance.",
      technologies: ["React", "Redux", "Custom Hooks", "Python", "Django"],
    },
    {
      id: "6",
      name: "Facility Management System (SaaS)",
      description: "An advanced SaaS solution for facility operations featuring 3D interactive space visualization using Three.js. The platform enables asset tracking, maintenance scheduling, resource allocation, and real-time monitoring, giving organizations a holistic view of their facilities through an immersive UI.",
      technologies: ["React", "Three.js", "Zustand"],
    },
    {
      id: "7",
      name: "FATCA/CRS File Upload System",
      description: "A secure and compliance-focused document processing system for FATCA/CRS filings. It ensures encrypted file upload, automated validation, format standardization, and real-time error reporting. Built to meet regulatory standards, the system improves accuracy and speeds up compliance workflows.",
      technologies: ["React"],
    }
  ],
  techStack: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Material UI", category: "frontend" },
    { name: "TailwindCSS", category: "frontend" },
    { name: "Zustand", category: "frontend" },
    { name: "Redux", category: "frontend" },
    { name: "Three.js", category: "frontend" },

    { name: "MongoDB", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "Redis", category: "database" },
    
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "WebSocket", category: "backend" },
    { name: "REST API", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "Microservices", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Django", category: "backend" },

    { name: "API Integration", category: "other" },
    { name: "Agile Methodology", category: "other" },
    { name: "Payment Integration", category: "other" },

    { name: "Analytics", category: "analytics" },
    { name: "Reporting", category: "analytics" },
    { name: "Dashboards", category: "analytics" },
    { name: "Data Visualization", category: "analytics" },
    
    { name: "Git", category: "tool" },
    { name: "Postman", category: "tool" },
    { name: "Docker", category: "tool" },
    { name: "Firebase", category: "tool" },
    { name: "AWS", category: "tool" },
    { name: "GCP", category: "tool" },
    { name: "GitLab", category: "tool" },
    { name: "GitHub", category: "tool" },
    { name: "Bitbucket", category: "tool" },
    { name: "Jira", category: "tool" },
    { name: "Power BI", category: "tool" },
    
  ],
  services: [
    "Web Development",
    "Full-Stack Solutions",
    "SaaS Development",
    "API Integration",
    "Database Design",
    "UI/UX Design",
    "Performance Optimization",
    "Cloud Deployment"
  ],
  pricing: [
    {
      id: "basic",
      name: "Basic",
      price: "$999",
      features: [
        "Up to 5 pages",
        "Responsive Design",
        "Basic SEO",
        "Email Support",
        "1 Month Support"
      ]
    },
    {
      id: "standard",
      name: "Standard",
      price: "$2,499",
      popular: true,
      features: [
        "Up to 15 pages",
        "Responsive Design",
        "Advanced SEO",
        "CMS Integration",
        "Priority Support",
        "3 Months Support",
        "Performance Optimization"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      price: "$4,999",
      features: [
        "Unlimited Pages",
        "Custom Design",
        "Advanced SEO",
        "Full CMS",
        "24/7 Support",
        "6 Months Support",
        "Performance Optimization",
        "Security Audit",
        "Analytics Setup"
      ]
    }
  ],
  clients: [
    {
      id: "1",
      name: "TechCorp",
      testimonial: "Outstanding work! They delivered exactly what we needed on time and within budget.",
      role: "CEO"
    },
    {
      id: "2",
      name: "StartupXYZ",
      testimonial: "Professional team with deep technical expertise. Highly recommended!",
      role: "Founder"
    },
    {
      id: "3",
      name: "Enterprise Solutions",
      testimonial: "The best development partner we've worked with. Exceeded our expectations.",
      role: "CTO"
    },
    {
      id: "4",
      name: "Digital Agency",
      testimonial: "Reliable, efficient, and always delivers quality work.",
      role: "Director"
    }
  ],
  contact: {
    email: "thakurrohit210302@gmail.com",
    phone: "+91 9818000000",
    address: "Chandigarh, India",
    social: {
      linkedin: "https://linkedin.com/in/amishajain14",
      github: "https://github.com/rohitrampal",
      twitter: "https://twitter.com/"
    }
  },
  theme: {
    light: {
      primary: "#1976d2",
      secondary: "#dc004e",
      background: "#ffffff",
      text: "#000000"
    },
    dark: {
      primary: "#90caf9",
      secondary: "#f48fb1",
      background: "#121212",
      text: "#ffffff"
    }
  }
};

