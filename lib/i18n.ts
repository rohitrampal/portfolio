import { strings } from './strings';
import { portfolioConfig } from '@/config';

export type Locale = 
  | 'en' 
  | 'fr' 
  | 'ne-NP' 
  | 'ru' 
  | 'ar' 
  | 'az' 
  | 'zh-CN' 
  | 'nl' 
  | 'gu' 
  | 'hi' 
  | 'id' 
  | 'ga' 
  | 'ks' 
  | 'la' 
  | 'ml' 
  | 'pi' 
  | 'sa' 
  | 'te' 
  | 'uz';

export const locales: Locale[] = [
  'en', 
  'fr', 
  'ne-NP', 
  'ru', 
  'ar', 
  'az', 
  'zh-CN', 
  'nl', 
  'gu', 
  'hi', 
  'id', 
  'ga', 
  'ks', 
  'la', 
  'ml', 
  'pi', 
  'sa', 
  'te', 
  'uz'
];

export const defaultLocale: Locale = 'en';

// Helper function to create translation object from strings
const createTranslation = (translatedStrings: typeof strings) => translatedStrings;

export const translations: Record<Locale, typeof strings> = {
  // English (base)
  en: strings,

  // French
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À Propos',
      projects: 'Projets',
      skills: 'Compétences',
      techStack: 'Technologies',
      pricing: 'Tarifs',
      clients: 'Clients',
      contact: 'Contact',
    },
    home: {
      title: portfolioConfig.developer.name,
      tagline: portfolioConfig.developer.tagline,
      role: portfolioConfig.developer.role,
      description: 'Ouvert aux opportunités d\'emploi dans le monde entier. Passionné par la création d\'expériences numériques polies, intuitives et réfléchies qui laissent une marque.',
      contactButton: 'Contact',
      availableForWork: 'Disponible pour travailler',
      hireMe: 'Engagez-moi',
    },
    services: {
      title: 'Ce Que Je Fais /',
      subtitle: '(Services)',
      intro: 'Je me spécialise dans la création d\'applications web full-stack rapides, fiables et conviviales. Avec une solide base dans les technologies frontend et backend, j\'aide à donner vie aux idées, que ce soit pour une entreprise, une startup ou une équipe produit.',
      service1: {
        number: '01',
        title: 'Développement Full-Stack',
        description: 'Des interactions frontend aux API backend, je construis des solutions web complètes. Je travaille avec des stacks modernes pour livrer des applications évolutives, maintenables et prêtes pour les utilisateurs réels.',
        tech: ['React, Node.js, Express.js', 'API REST, Firebase, Docker', 'Git, GitHub, Postman'],
      },
      service2: {
        number: '02',
        title: 'UI/UX & Frontend',
        description: 'Le design est plus que l\'apparence — il s\'agit de clarté et de connexion. Je conçois et développe des interfaces propres et réactives qui semblent intuitives sur tous les appareils. Mon objectif est la clarté, l\'accessibilité et des expériences utilisateur transparentes.',
        tech: ['NextJs, TailwindCSS, GSAP', 'Figma vers Code', 'HTML, CSS, JavaScript'],
      },
      service3: {
        number: '03',
        title: 'Optimisation',
        description: 'Au-delà de la gestion des données, je suis motivé par le défi de transformer des entrées brutes complexes en systèmes fiables et utilisables. J\'aime concevoir des pipelines qui alimentent les insights et appliquer les principes CS de base pour construire pour l\'échelle, la vitesse et la stabilité.',
        tech: ['Structures de Données & Algorithmes', 'SGBD, POO, Fondamentaux OS', 'Pipelines de Données, ETL et Évolutivité'],
      },
    },
    projects: {
      title: 'ŒUVRES SÉLECTIONNÉES /',
      subtitle: '(PROJETS)',
      description: 'Expériences numériques soigneusement conçues qui mélangent utilité et esthétique en quelque chose de fonctionnel, mémorable et raffiné.',
    },
    skills: {
      title: 'Compétences',
      category1: 'Langages & Outils',
      category2: 'Frameworks & Bibliothèques',
      category3: 'Concepts CS Fondamentaux',
      skillsList: strings.skills.skillsList, // Keep technical terms in English
    },
    about: {
      title: 'À Propos de Moi',
      description: 'Je suis un ingénieur logiciel motivé par la passion de transformer les idées en expériences numériques propres et intuitives. Je suis un ingénieur logiciel passionné avec un don pour créer des applications web full-stack en utilisant des technologies modernes comme Next.js et TailwindCSS. Mon parcours dans la tech a commencé par une curiosité pour résoudre des problèmes du monde réel grâce à des solutions innovantes, ce qui a évolué en un amour pour créer des expériences numériques centrées sur l\'utilisateur. Au-delà du codage, je prospère dans des environnements collaboratifs et j\'aime relever des défis avec des solutions créatives. Je vise à contribuer à des projets impactants qui font une différence dans la vie des utilisateurs.',
      ourValues: 'Nos Valeurs',
    },
    techStack: {
      title: 'Stack Technique & Services',
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

  // Russian
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      projects: 'Проекты',
      skills: 'Навыки',
      techStack: 'Технологии',
      pricing: 'Цены',
      clients: 'Клиенты',
      contact: 'Контакты',
    },
    home: {
      title: portfolioConfig.developer.name,
      tagline: portfolioConfig.developer.tagline,
      role: portfolioConfig.developer.role,
      description: 'Открыт для возможностей трудоустройства по всему миру. Увлечен созданием отточенных, интуитивных и продуманных цифровых впечатлений, которые оставляют след.',
      contactButton: 'Связаться',
      availableForWork: 'Доступен для работы',
      hireMe: 'Нанять меня',
    },
    services: {
      title: 'Что Я Делаю /',
      subtitle: '(Услуги)',
      intro: 'Я специализируюсь на создании полнофункциональных веб-приложений, которые быстры, надежны и удобны для пользователей. С прочной основой как во frontend, так и в backend технологиях, я помогаю воплощать идеи в жизнь, будь то для бизнеса, стартапа или продуктовой команды.',
      service1: {
        number: '01',
        title: 'Full-Stack Разработка',
        description: 'От взаимодействий frontend до API backend, я создаю полные веб-решения. Я работаю с современными стеками для доставки приложений, которые масштабируемы, поддерживаемы и готовы для реальных пользователей.',
        tech: ['React, Node.js, Express.js', 'REST API, Firebase, Docker', 'Git, GitHub, Postman'],
      },
      service2: {
        number: '02',
        title: 'UI/UX & Frontend',
        description: 'Дизайн — это больше, чем внешний вид — это ясность и связь. Я проектирую и разрабатываю чистые, адаптивные интерфейсы, которые кажутся интуитивными на всех устройствах. Мой фокус на ясности, доступности и бесшовных пользовательских впечатлениях.',
        tech: ['NextJs, TailwindCSS, GSAP', 'Figma в Код', 'HTML, CSS, JavaScript'],
      },
      service3: {
        number: '03',
        title: 'Оптимизация',
        description: 'Помимо обработки данных, меня вдохновляет вызов превращения сложных сырых входных данных в надежные, пригодные к использованию системы. Мне нравится проектировать конвейеры, которые обеспечивают аналитику и применять основные принципы CS для построения масштабируемости, скорости и стабильности.',
        tech: ['Структуры Данных & Алгоритмы', 'СУБД, ООП, Основы ОС', 'Конвейеры Данных, ETL и Масштабируемость'],
      },
    },
    projects: {
      title: 'ИЗБРАННЫЕ РАБОТЫ /',
      subtitle: '(ПРОЕКТЫ)',
      description: 'Продуманно созданные цифровые впечатления, которые сочетают функциональность и эстетику во что-то функциональное, запоминающееся и утонченное.',
    },
    skills: {
      title: 'Навыки',
      category1: 'Языки & Инструменты',
      category2: 'Фреймворки & Библиотеки',
      category3: 'Основные CS Концепции',
      skillsList: strings.skills.skillsList,
    },
    about: {
      title: 'Обо Мне',
      description: 'Я инженер-программист, движимый страстью превращать идеи в чистые, интуитивные цифровые впечатления. Я страстный инженер-программист с талантом к созданию полнофункциональных веб-приложений с использованием современных технологий, таких как Next.js и TailwindCSS. Мой путь в технологиях начался с любопытства к решению реальных проблем через инновационные решения, что переросло в любовь к созданию ориентированных на пользователя цифровых впечатлений. Помимо программирования, я процветаю в совместных средах и наслаждаюсь решением сложных проблем с творческими решениями. Я стремлюсь внести вклад в значимые проекты, которые меняют жизнь пользователей.',
      ourValues: 'Наши Ценности',
    },
    techStack: {
      title: 'Технологический Стек & Услуги',
      subtitle: 'Технологии, с которыми мы работаем',
      services: 'Наши Услуги',
    },
    pricing: {
      title: 'Тарифные Планы',
      subtitle: 'Выберите план, который соответствует вашим потребностям',
      getStarted: 'Начать',
      popular: 'Популярный',
      perProject: 'за проект',
    },
    clients: {
      title: 'Наши Клиенты',
      subtitle: 'Доверяют стартапы, агентства и предприятия по всему миру.',
      testimonial: 'Отзывы',
    },
    contact: {
      title: 'Свяжитесь с Нами',
      subtitle: 'Есть проект в голове? Давайте поговорим!',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение / Запрос',
      send: 'Отправить Сообщение',
      sending: 'Отправка...',
      success: 'Спасибо! Ваше сообщение было успешно отправлено.',
      error: 'Что-то пошло не так. Пожалуйста, попробуйте снова.',
      nameRequired: 'Имя обязательно',
      emailRequired: 'Email обязателен',
      emailInvalid: 'Пожалуйста, введите действительный email',
      messageRequired: 'Сообщение обязательно',
    },
    footer: {
      copyright: '© 2024 Портфолио. Все права защищены.',
      builtWith: 'Создано с Next.js & Material UI',
    },
  },

  // Arabic
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      projects: 'المشاريع',
      skills: 'المهارات',
      techStack: 'التقنيات',
      pricing: 'الأسعار',
      clients: 'العملاء',
      contact: 'اتصل بنا',
    },
    home: {
      title: portfolioConfig.developer.name,
      tagline: portfolioConfig.developer.tagline,
      role: portfolioConfig.developer.role,
      description: 'مفتوح لفرص العمل في جميع أنحاء العالم. شغوف ببناء تجارب رقمية مصقولة وبديهية ومدروسة تترك أثراً.',
      contactButton: 'اتصل',
      availableForWork: 'متاح للعمل',
      hireMe: 'وظفني',
    },
    services: {
      title: 'ما أفعله /',
      subtitle: '(الخدمات)',
      intro: 'أتخصص في بناء تطبيقات ويب كاملة المكدس سريعة وموثوقة وسهلة الاستخدام. مع أساس قوي في كل من تقنيات الواجهة الأمامية والخلفية، أساعد في إحياء الأفكار سواء كانت لشركة أو شركة ناشئة أو فريق منتج.',
      service1: {
        number: '01',
        title: 'التطوير الكامل',
        description: 'من تفاعلات الواجهة الأمامية إلى واجهات برمجة التطبيقات الخلفية، أبني حلول ويب كاملة. أعمل مع مكدسات حديثة لتقديم تطبيقات قابلة للتطوير وقابلة للصيانة وجاهزة للمستخدمين الحقيقيين.',
        tech: ['React, Node.js, Express.js', 'REST APIs, Firebase, Docker', 'Git, GitHub, Postman'],
      },
      service2: {
        number: '02',
        title: 'UI/UX والواجهة الأمامية',
        description: 'التصميم أكثر من المظهر — يتعلق بالوضوح والاتصال. أصمم وأطور واجهات نظيفة ومتجاوبة تبدو بديهية عبر الأجهزة. تركيزي على الوضوح وإمكانية الوصول وتجارب المستخدم السلسة.',
        tech: ['NextJs, TailwindCSS, GSAP', 'Figma إلى الكود', 'HTML, CSS, JavaScript'],
      },
      service3: {
        number: '03',
        title: 'التحسين',
        description: 'بعد التعامل مع البيانات، أدفعني التحدي المتمثل في تحويل المدخلات الأولية المعقدة إلى أنظمة موثوقة وقابلة للاستخدام. أستمتع بتصميم خطوط الأنابيب التي تدفع الرؤى وتطبيق مبادئ CS الأساسية للبناء من أجل الحجم والسرعة والاستقرار.',
        tech: ['هياكل البيانات والخوارزميات', 'قواعد البيانات، البرمجة الكائنية، أساسيات أنظمة التشغيل', 'خطوط أنابيب البيانات، ETL والقابلية للتطوير'],
      },
    },
    projects: {
      title: 'الأعمال المختارة /',
      subtitle: '(المشاريع)',
      description: 'تجارب رقمية مصنوعة بعناية تدمج المنفعة والجماليات في شيء وظيفي وملهم ومكرر.',
    },
    skills: {
      title: 'المهارات',
      category1: 'اللغات والأدوات',
      category2: 'الأطر والمكتبات',
      category3: 'مفاهيم CS الأساسية',
      skillsList: strings.skills.skillsList,
    },
    about: {
      title: 'عني',
      description: 'أنا مهندس برمجيات مدفوع بشغف تحويل الأفكار إلى تجارب رقمية نظيفة وبديهية. أنا مهندس برمجيات شغوف مع موهبة في بناء تطبيقات ويب كاملة المكدس باستخدام تقنيات حديثة مثل Next.js و TailwindCSS. بدأت رحلتي في التكنولوجيا بفضول لحل المشاكل الواقعية من خلال حلول مبتكرة، والتي تطورت إلى حب لصنع تجارب رقمية تركز على المستخدم. إلى جانب البرمجة، أزدهر في البيئات التعاونية وأستمتع بمعالجة المشاكل الصعبة بحلول إبداعية. أهدف للمساهمة في مشاريع مؤثرة تحدث فرقاً في حياة المستخدمين.',
      ourValues: 'قيمنا',
    },
    techStack: {
      title: 'المكدس التقني والخدمات',
      subtitle: 'التقنيات التي نعمل معها',
      services: 'خدماتنا',
    },
    pricing: {
      title: 'خطط الأسعار',
      subtitle: 'اختر الخطة التي تناسب احتياجاتك',
      getStarted: 'ابدأ',
      popular: 'شائع',
      perProject: 'لكل مشروع',
    },
    clients: {
      title: 'عملاؤنا',
      subtitle: 'موثوق به من قبل الشركات الناشئة والوكالات والشركات عالمياً.',
      testimonial: 'الشهادات',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'لديك مشروع في الاعتبار؟ دعنا نتحدث!',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة / الاستفسار',
      send: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      success: 'شكراً! تم إرسال رسالتك بنجاح.',
      error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
      nameRequired: 'الاسم مطلوب',
      emailRequired: 'البريد الإلكتروني مطلوب',
      emailInvalid: 'يرجى إدخال بريد إلكتروني صالح',
      messageRequired: 'الرسالة مطلوبة',
    },
    footer: {
      copyright: '© 2024 المحفظة. جميع الحقوق محفوظة.',
      builtWith: 'مبني بـ Next.js & Material UI',
    },
  },

  // Continue with other languages - I'll add a few more key ones and use English as fallback for others
  'ne-NP': strings, // Nepali - using English as placeholder
  az: strings, // Azerbaijani - using English as placeholder
  'zh-CN': strings, // Chinese - using English as placeholder
  nl: strings, // Dutch - using English as placeholder
  gu: strings, // Gujarati - using English as placeholder
  hi: strings, // Hindi - using English as placeholder
  id: strings, // Indonesian - using English as placeholder
  ga: strings, // Irish - using English as placeholder
  ks: strings, // Kashmiri - using English as placeholder
  la: strings, // Latin - using English as placeholder
  ml: strings, // Malayalam - using English as placeholder
  pi: strings, // Pali - using English as placeholder
  sa: strings, // Sanskrit - using English as placeholder
  te: strings, // Telugu - using English as placeholder
  uz: strings, // Uzbek - using English as placeholder
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}
