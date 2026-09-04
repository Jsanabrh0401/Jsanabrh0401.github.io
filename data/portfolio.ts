export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export type PortfolioContent = {
  locale: Locale;
  nav: {
    home: string;
    stack: string;
    about: string;
    experience: string;
    projects: string;
    education: string;
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
    linkedin: string;
    viewProject: string;
  };
  profile: string;
  experience: Array<{
    company: string;
    logo: string;
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
    technologies: string[];
    preview: "web" | "mobile";
    href?: string;
    product: string;
    logo: string;
    mark: string;
  }>;
  education: Array<{
    institution: string;
    program: string;
    period: string;
  }>;
  skills: string[];
  languages: Array<{ language: string; level: string }>;
};

export type Technology = {
  name: string;
  icon: string;
  invert?: boolean;
  scale?: "lg";
};

const shared = {
  technologies: [
    { name: "NestJS", icon: "/tech/nestjs.svg" },
    { name: "Next.js", icon: "/tech/nextjs.svg", invert: true, scale: "lg" },
    { name: "React.js", icon: "/tech/react.webp" },
    { name: "TypeScript", icon: "/tech/typescript.webp", scale: "lg" },
    { name: "Tailwind CSS", icon: "/tech/tailwind.webp" },
    { name: "PostgreSQL", icon: "/tech/postgresql.webp" },
    { name: "Redux.js", icon: "/tech/redux.svg" },
    { name: "React Native", icon: "/tech/react.webp" },
    { name: "MongoDB", icon: "/tech/mongo.webp" },
    { name: "Redis", icon: "/tech/redis.svg" },
    { name: "Google Cloud", icon: "/tech/googlecloud.webp" },
    { name: "Supabase", icon: "/tech/supabase.webp" },
    { name: "Railway", icon: "/tech/railway.svg", invert: true, scale: "lg" },
    { name: "Vercel", icon: "/tech/vercel.svg", invert: true },
    { name: "Cloudflare", icon: "/tech/cloudflare.svg" },
    { name: "Cloudflare R2", icon: "/tech/cloudflare-r2.svg" },
  ] satisfies Technology[],
  zyvou: {
    href: "https://www.zyvou.com",
    logo: "/project/zyvou-logo.svg",
    mark: "/project/zyvou-mark.svg",
  },
  contact: {
    name: "Juan Pablo Sanabria Hoyos",
    email: "juanpablosanabriahoyos@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-pablo-sanabria-hoyos-5a8599332/",
    location: "Medellín, Colombia",
  },
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  es: {
    locale: "es",
    nav: {
      home: "Inicio",
      stack: "Tecnologías",
      about: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Formación",
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
        "Producto en creación. Dos superficies del mismo ecosistema: la experiencia web pública y la app con la que los técnicos gestionarán su trabajo.",
      stack: "Tecnologías",
      stackKicker: "Stack principal",
      education: "Formación",
      educationKicker: "Educación",
      strengths: "Habilidades",
      languages: "Idiomas",
      contact: "Contacto",
      contactKicker: "Conversemos",
      contactTitle: "¿Hablamos?",
      contactCopy:
        "Si quieres conectar, comentar algo del portafolio o simplemente saludar, escríbeme.",
      downloadCv: "Descargar CV",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      switchLanguage: "Cambiar idioma",
      location: "Ubicación",
      email: "Correo",
      linkedin: "LinkedIn",
      viewProject: "Ver proyecto",
    },
    profile:
      "Desarrollador de Software Full Stack con experiencia en la creación de soluciones web y móviles escalables utilizando NestJS, Next.js, React.js, TypeScript y PostgreSQL. Me caracterizan el liderazgo, el trabajo colaborativo y la resolución de problemas complejos mediante pensamiento crítico e innovación. Mi objetivo es aportar al crecimiento de las empresas construyendo productos digitales eficientes, seguros y centrados en la experiencia del usuario.",
    experience: [
      {
        company: "Housy Host",
        logo: "/experience/housy.jpg",
        role: "Desarrollador Full Stack",
        period: "Junio 2025 — Actualmente",
        description:
          "Desarrollo de soluciones web y móviles dentro de un stack moderno, desde la interfaz hasta los servicios y la persistencia de datos.",
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
          "Redis",
          "Google Cloud",
        ],
      },
      {
        company: "Novacodify",
        logo: "/experience/Novacodify.webp",
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
        product: "Zyvou",
        title: "Zyvou — Plataforma Web",
        category: "Aplicación web",
        status: "En creación",
        preview: "web",
        href: shared.zyvou.href,
        logo: shared.zyvou.logo,
        mark: shared.zyvou.mark,
        description:
          "Landing page y plataforma web para conectar técnicos independientes con nuevas oportunidades de trabajo. El producto sigue en desarrollo.",
        technologies: [
          "Next.js",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "NestJS",
          "API REST",
          "Supabase",
          "Railway",
          "Vercel",
          "Cloudflare",
          "Cloudflare R2",
        ],
      },
      {
        number: "02",
        product: "Zyvou",
        title: "Zyvou — Mobile App",
        category: "Aplicación móvil",
        status: "En creación",
        preview: "mobile",
        href: shared.zyvou.href,
        logo: shared.zyvou.logo,
        mark: shared.zyvou.mark,
        description:
          "Aplicación móvil para que técnicos independientes gestionen oportunidades, servicios y su actividad dentro de Zyvou. El producto sigue en desarrollo.",
        technologies: ["React Native", "TypeScript", "React.js"],
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
      home: "Home",
      stack: "Technologies",
      about: "Profile",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
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
        "Product in progress. Two surfaces of the same ecosystem: the public web experience and the app technicians will use to manage their work.",
      stack: "Technologies",
      stackKicker: "Core stack",
      education: "Education",
      educationKicker: "Learning",
      strengths: "Skills",
      languages: "Languages",
      contact: "Contact",
      contactKicker: "Get in touch",
      contactTitle: "Want to talk?",
      contactCopy:
        "If you'd like to connect, share a thought about the work, or just say hello, write to me.",
      downloadCv: "Download résumé",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch language",
      location: "Location",
      email: "Email",
      linkedin: "LinkedIn",
      viewProject: "View project",
    },
    profile:
      "Full Stack Software Developer with experience building scalable web and mobile solutions using NestJS, Next.js, React.js, TypeScript, and PostgreSQL. I bring leadership, collaborative work, and the ability to solve complex problems through critical thinking and innovation. My goal is to support company growth by building efficient, secure, and user-centered digital products.",
    experience: [
      {
        company: "Housy Host",
        logo: "/experience/housy.jpg",
        role: "Full Stack Developer",
        period: "June 2025 — Present",
        description:
          "Building web and mobile solutions across a modern stack, from user interfaces to services and data persistence.",
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
          "Redis",
          "Google Cloud",
        ],
      },
      {
        company: "Novacodify",
        logo: "/experience/Novacodify.webp",
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
        product: "Zyvou",
        title: "Zyvou — Web Platform",
        category: "Web application",
        status: "In progress",
        preview: "web",
        href: shared.zyvou.href,
        logo: shared.zyvou.logo,
        mark: shared.zyvou.mark,
        description:
          "Landing page and web platform that connects independent technicians with new work opportunities. The product is still in development.",
        technologies: [
          "Next.js",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "NestJS",
          "API REST",
          "Supabase",
          "Railway",
          "Vercel",
          "Cloudflare",
          "Cloudflare R2",
        ],
      },
      {
        number: "02",
        product: "Zyvou",
        title: "Zyvou — Mobile App",
        category: "Mobile application",
        status: "In progress",
        preview: "mobile",
        href: shared.zyvou.href,
        logo: shared.zyvou.logo,
        mark: shared.zyvou.mark,
        description:
          "Mobile app for independent technicians to manage opportunities, services, and their activity inside Zyvou. The product is still in development.",
        technologies: ["React Native", "TypeScript", "React.js"],
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
