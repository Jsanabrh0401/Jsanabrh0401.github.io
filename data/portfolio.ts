export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export type PortfolioContent = {
  locale: Locale;
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    summary: string;
    availability: string;
    primaryCta: string;
    secondaryCta: string;
  };
  labels: {
    about: string;
    aboutKicker: string;
    experience: string;
    experienceKicker: string;
    current: string;
    projects: string;
    projectsKicker: string;
    projectsNote: string;
    stack: string;
    stackKicker: string;
    education: string;
    educationKicker: string;
    strengths: string;
    languages: string;
    contact: string;
    contactKicker: string;
    contactTitle: string;
    contactCopy: string;
    downloadCv: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
    location: string;
    email: string;
    phone: string;
  };
  profile: string;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
  }>;
  projects: Array<{
    number: string;
    title: string;
    category: string;
    description: string;
    status: string;
  }>;
  education: Array<{
    institution: string;
    program: string;
    period: string;
  }>;
  skills: string[];
  languages: Array<{ language: string; level: string }>;
};

const shared = {
  technologies: [
    "NestJS",
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Redux.js",
    "React Native",
    "MongoDB",
  ],
  contact: {
    name: "Juan Pablo Sanabria Hoyos",
    email: "juanpablosanabriahoyos@gmail.com",
    phoneDisplay: "+57 311 642 7061",
    phoneHref: "+573116427061",
    location: "Medellín, Colombia",
  },
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  es: {
    locale: "es",
    nav: {
      about: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Desarrollador de software",
      role: "Full Stack Developer",
      summary:
        "Creo productos web y móviles escalables, seguros y centrados en las personas.",
      availability: "Disponible para nuevas oportunidades",
      primaryCta: "Conoce mi experiencia",
      secondaryCta: "Hablemos",
    },
    labels: {
      about: "Perfil profesional",
      aboutKicker: "Sobre mí",
      experience: "Experiencia",
      experienceKicker: "Trayectoria",
      current: "Actualmente",
      projects: "Proyectos seleccionados",
      projectsKicker: "Trabajo",
      projectsNote:
        "Esta sección está preparada para incorporar próximamente casos de estudio, enlaces y resultados verificables.",
      stack: "Tecnologías",
      stackKicker: "Stack principal",
      education: "Formación",
      educationKicker: "Educación",
      strengths: "Habilidades",
      languages: "Idiomas",
      contact: "Contacto",
      contactKicker: "Construyamos algo valioso",
      contactTitle: "¿Tienes un reto en mente?",
      contactCopy:
        "Estoy abierto a conversar sobre oportunidades, productos digitales y equipos que quieran generar impacto.",
      downloadCv: "Descargar CV",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      switchLanguage: "Cambiar idioma",
      location: "Ubicación",
      email: "Correo",
      phone: "Teléfono",
    },
    profile:
      "Desarrollador de Software Full Stack con experiencia en la creación de soluciones web y móviles escalables utilizando NestJS, Next.js, React.js, TypeScript y PostgreSQL. Me caracterizan el liderazgo, el trabajo colaborativo y la resolución de problemas complejos mediante pensamiento crítico e innovación. Mi objetivo es aportar al crecimiento de las empresas construyendo productos digitales eficientes, seguros y centrados en la experiencia del usuario.",
    experience: [
      {
        company: "Housy Host",
        role: "Desarrollador Full Stack",
        period: "Junio 2025 — Actualmente",
        description:
          "Desarrollo de soluciones web y móviles dentro de un stack moderno, desde la interfaz hasta los servicios y la persistencia de datos.",
        technologies: shared.technologies,
      },
      {
        company: "Novacodify",
        role: "Desarrollador Full Stack",
        period: "Febrero 2025 — Mayo 2025",
        description:
          "Desarrollo de productos full stack y liderazgo de equipos de trabajo.",
        technologies: [
          "NestJS",
          "Next.js",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "MongoDB",
        ],
      },
    ],
    projects: [
      {
        number: "01",
        title: "Caso de estudio en preparación",
        category: "Aplicación web",
        description:
          "Espacio reservado para presentar el problema, el proceso técnico y el impacto de un proyecto destacado.",
        status: "Próximamente",
      },
      {
        number: "02",
        title: "Producto móvil en preparación",
        category: "React Native",
        description:
          "Espacio preparado para documentar arquitectura, decisiones de producto y resultados de una experiencia móvil.",
        status: "Próximamente",
      },
      {
        number: "03",
        title: "Plataforma full stack en preparación",
        category: "Web & API",
        description:
          "Próximo caso de estudio con contexto, tecnologías utilizadas y aprendizajes verificables.",
        status: "Próximamente",
      },
    ],
    education: [
      {
        institution: "Riwi",
        program: "Desarrollador Full Stack",
        period: "Noviembre 2023 — Octubre 2024",
      },
      {
        institution: "CESDE",
        program: "Técnico en Desarrollo de Software",
        period: "Octubre 2022 — Octubre 2023",
      },
    ],
    skills: [
      "Liderazgo",
      "Proactividad",
      "Trabajo colaborativo",
      "Comunicación asertiva",
      "Resolución de problemas",
      "Gestión del tiempo",
      "Pensamiento crítico",
      "Inteligencia emocional",
      "Adaptabilidad",
    ],
    languages: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "A2" },
    ],
  },
  en: {
    locale: "en",
    nav: {
      about: "Profile",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Software developer",
      role: "Full Stack Developer",
      summary:
        "I build scalable, secure, and people-centered web and mobile products.",
      availability: "Open to new opportunities",
      primaryCta: "Explore my experience",
      secondaryCta: "Let's talk",
    },
    labels: {
      about: "Professional profile",
      aboutKicker: "About me",
      experience: "Experience",
      experienceKicker: "Career",
      current: "Present",
      projects: "Selected projects",
      projectsKicker: "Work",
      projectsNote:
        "This section is ready for upcoming case studies, links, and verified outcomes.",
      stack: "Technologies",
      stackKicker: "Core stack",
      education: "Education",
      educationKicker: "Learning",
      strengths: "Skills",
      languages: "Languages",
      contact: "Contact",
      contactKicker: "Let's build something valuable",
      contactTitle: "Have a challenge in mind?",
      contactCopy:
        "I am open to conversations about opportunities, digital products, and teams seeking to create meaningful impact.",
      downloadCv: "Download résumé",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch language",
      location: "Location",
      email: "Email",
      phone: "Phone",
    },
    profile:
      "Full Stack Software Developer with experience building scalable web and mobile solutions using NestJS, Next.js, React.js, TypeScript, and PostgreSQL. I bring leadership, collaborative work, and the ability to solve complex problems through critical thinking and innovation. My goal is to support company growth by building efficient, secure, and user-centered digital products.",
    experience: [
      {
        company: "Housy Host",
        role: "Full Stack Developer",
        period: "June 2025 — Present",
        description:
          "Building web and mobile solutions across a modern stack, from user interfaces to services and data persistence.",
        technologies: shared.technologies,
      },
      {
        company: "Novacodify",
        role: "Full Stack Developer",
        period: "February 2025 — May 2025",
        description:
          "Full stack product development and leadership of collaborative teams.",
        technologies: [
          "NestJS",
          "Next.js",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "MongoDB",
        ],
      },
    ],
    projects: [
      {
        number: "01",
        title: "Case study in progress",
        category: "Web application",
        description:
          "Reserved for a detailed look at the problem, technical process, and impact of a featured project.",
        status: "Coming soon",
      },
      {
        number: "02",
        title: "Mobile product in progress",
        category: "React Native",
        description:
          "Prepared to document architecture, product decisions, and outcomes from a mobile experience.",
        status: "Coming soon",
      },
      {
        number: "03",
        title: "Full stack platform in progress",
        category: "Web & API",
        description:
          "Upcoming case study featuring context, technologies, and verified learnings.",
        status: "Coming soon",
      },
    ],
    education: [
      {
        institution: "Riwi",
        program: "Full Stack Developer",
        period: "November 2023 — October 2024",
      },
      {
        institution: "CESDE",
        program: "Software Development Technician",
        period: "October 2022 — October 2023",
      },
    ],
    skills: [
      "Leadership",
      "Proactivity",
      "Collaborative work",
      "Assertive communication",
      "Problem solving",
      "Time management",
      "Critical thinking",
      "Emotional intelligence",
      "Adaptability",
    ],
    languages: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "A2" },
    ],
  },
};

export { shared };
