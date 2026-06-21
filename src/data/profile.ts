export interface Service {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  role: string;
  tagline: string;
  summary: string;
  aboutParagraphs: string[];
  techStack: {
    category: string;
    skills: string[];
  }[];
  services: Service[];
}

export const profile: Profile = {
  name: "Alex Mijail Boulchouk",
  location: "Córdoba, Argentina",
  email: "amboulchouk@outlook.com",
  github: "https://github.com/AMBoulchouk",
  linkedin: "https://www.linkedin.com/in/amboulchouk/",
  role: "Tech Lead · Full Stack Developer · Software Consultant",
  tagline: "Building software, teams and products.",
  summary: "Full Stack Developer con más de 7 años de experiencia creando soluciones web, sistemas empresariales y plataformas a medida para organizaciones públicas y privadas. Especializado en Vue, Laravel, FastAPI, PostgreSQL y arquitecturas modernas. Actualmente se desempeña como Tech Lead, liderando equipos de desarrollo, participando en decisiones de arquitectura, procesos técnicos y estrategia de producto. También cuenta con experiencia como instructor en Digital House e INTI, formando desarrolladores en tecnologías Full Stack.",
  aboutParagraphs: [
    "Soy desarrollador Full Stack con experiencia liderando equipos, diseñando soluciones web y construyendo sistemas internos para empresas y organizaciones.",
    "Me interesa crear productos útiles, escalables y bien pensados, combinando desarrollo de software, liderazgo técnico, automatización e inteligencia artificial.",
    "Tengo experiencia en proyectos para sector público y privado, consultoría técnica, formación de desarrolladores y gestión de procesos de desarrollo de principio a fin."
  ],
  techStack: [
    {
      category: "Frontend",
      skills: ["Vue.js", "React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Laravel", "FastAPI", "Node.js", "PHP", "Python", "Symfony"]
    },
    {
      category: "Bases de datos",
      skills: ["PostgreSQL", "Oracle", "MySQL"]
    },
    {
      category: "Cloud & Tools",
      skills: ["AWS", "Azure", "Git", "GitHub", "APIs REST", "Docker"]
    }
  ],
  services: [
    {
      title: "Desarrollo Full Stack",
      description: "Construcción de aplicaciones web modernas, APIs, paneles internos y sistemas empresariales."
    },
    {
      title: "Liderazgo técnico",
      description: "Acompañamiento de equipos, revisión de código, decisiones de arquitectura y mejora de procesos."
    },
    {
      title: "Consultoría de software",
      description: "Análisis de necesidades, diseño de soluciones, automatización de procesos e integración de herramientas."
    },
    {
      title: "Formación técnica",
      description: "Mentoría, capacitación y acompañamiento para equipos o estudiantes."
    }
  ]
};
