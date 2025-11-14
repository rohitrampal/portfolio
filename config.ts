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
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'other';
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
    name: "John Doe",
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
      description: "A comprehensive travel booking platform for flights and hotels with integrated payment processing and third-party API connections.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Payment Integration", "Third-party APIs"],
    },
    {
      id: "2",
      name: "Appointment Management System (SaaS)",
      description: "Real-time SaaS appointment scheduling platform with advanced booking management and API integrations.",
      technologies: ["React", "Node.js", "Zustand", "PostgreSQL", "API Integrations"],
    },
    {
      id: "3",
      name: "Krew (Multi-Tenant SaaS)",
      description: "Enterprise-grade multi-tenant SaaS platform with WebSocket support and tenant isolation capabilities.",
      technologies: ["React", "Node.js", "WebSockets", "MongoDB"],
    },
    {
      id: "4",
      name: "School Management System (SaaS)",
      description: "Comprehensive ERP solution for educational institutions with role-based access, attendance tracking, and reporting.",
      technologies: ["React", "Node.js", "Zustand", "PostgreSQL"],
    },
    {
      id: "5",
      name: "Jua Hotel",
      description: "Modern hotel booking platform with intuitive user interface and seamless reservation management.",
      technologies: ["React", "Redux", "Custom Hooks"],
    },
    {
      id: "6",
      name: "Facility Management System (SaaS)",
      description: "Advanced SaaS platform featuring 3D facility visualization and comprehensive management tools.",
      technologies: ["React", "Three.js", "Zustand"],
    },
    {
      id: "7",
      name: "FATCA/CRS File Upload System",
      description: "Secure file upload and validation system for FATCA/CRS compliance with robust security measures.",
      technologies: ["React"],
    }
  ],
  techStack: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "Zustand", category: "tool" },
    { name: "Redux", category: "tool" },
    { name: "WebSocket", category: "tool" },
    { name: "Three.js", category: "tool" },
    { name: "Express", category: "backend" },
    { name: "REST API", category: "backend" },
    { name: "API Integration", category: "other" },
    { name: "TypeScript", category: "frontend" },
    { name: "Material UI", category: "frontend" }
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
    email: "contact@portfolio.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, San Francisco, CA 94105",
    social: {
      linkedin: "https://linkedin.com/in/amishajain14",
      github: "https://github.com/johndoe",
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

