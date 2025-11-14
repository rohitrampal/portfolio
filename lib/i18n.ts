import { portfolioConfig } from '@/config';

export type Locale = 'en' | 'fr';

export const locales: Locale[] = ['en', 'fr'];
export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      projects: 'Projects',
      techStack: 'Tech Stack',
      pricing: 'Pricing',
      clients: 'Clients',
      contact: 'Contact Us',
    },
    home: {
      title: portfolioConfig.developer.name,
      tagline: portfolioConfig.developer.tagline,
      role: portfolioConfig.developer.role,
      hireMe: 'Hire Me',
      contact: 'Contact',
    },
    about: {
      title: portfolioConfig.about.title,
      description: portfolioConfig.about.description,
      ourValues: 'Our Values',
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Showcasing our latest work and innovations',
      viewDetails: 'View Details',
      learnMore: 'Learn More',
    },
    techStack: {
      title: 'Tech Stack & Services',
      subtitle: 'Technologies we work with',
      services: 'Our Services',
    },
    pricing: {
      title: 'Pricing Plans',
      subtitle: 'Choose the plan that fits your needs',
      getStarted: 'Get Started',
      popular: 'Popular',
      perProject: 'per project',
    },
    clients: {
      title: 'Our Clients',
      subtitle: 'Trusted by startups, agencies, and enterprises globally.',
      testimonial: 'Testimonials',
    },
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
    footer: {
      copyright: '© 2024 Portfolio. All rights reserved.',
      builtWith: 'Built with Next.js & Material UI',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      projects: 'Projets',
      techStack: 'Technologies',
      pricing: 'Tarifs',
      clients: 'Clients',
      contact: 'Contact',
    },
    home: {
      title: portfolioConfig.developer.name,
      tagline: portfolioConfig.developer.tagline,
      role: portfolioConfig.developer.role,
      hireMe: 'Engagez-moi',
      contact: 'Contact',
    },
    about: {
      title: portfolioConfig.about.title,
      description: 'Nous sommes une équipe de freelances passionnés qui suivent la méthodologie Agile pour livrer des solutions efficaces, fiables et de haute qualité qui satisfont les exigences des clients et sont toujours livrées à temps. Notre focus est sur l\'évolutivité, la performance et une expérience client exceptionnelle.',
      ourValues: 'Nos Valeurs',
    },
    projects: {
      title: 'Nos Projets',
      subtitle: 'Découvrez nos derniers travaux et innovations',
      viewDetails: 'Voir les Détails',
      learnMore: 'En Savoir Plus',
    },
    techStack: {
      title: 'Technologies & Services',
      subtitle: 'Technologies avec lesquelles nous travaillons',
      services: 'Nos Services',
    },
    pricing: {
      title: 'Plans Tarifaires',
      subtitle: 'Choisissez le plan qui correspond à vos besoins',
      getStarted: 'Commencer',
      popular: 'Populaire',
      perProject: 'par projet',
    },
    clients: {
      title: 'Nos Clients',
      subtitle: 'Approuvé par les startups, agences et entreprises du monde entier.',
      testimonial: 'Témoignages',
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Vous avez un projet en tête? Parlons-en!',
      name: 'Nom',
      email: 'Email',
      message: 'Message / Question',
      send: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      success: 'Merci! Votre message a été envoyé avec succès.',
      error: 'Une erreur s\'est produite. Veuillez réessayer.',
      nameRequired: 'Le nom est requis',
      emailRequired: 'L\'email est requis',
      emailInvalid: 'Veuillez entrer un email valide',
      messageRequired: 'Le message est requis',
    },
    footer: {
      copyright: '© 2024 Portfolio. Tous droits réservés.',
      builtWith: 'Construit avec Next.js & Material UI',
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

