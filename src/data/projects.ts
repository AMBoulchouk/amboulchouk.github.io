export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio personal",
    description: "Sitio web personal tipo CV y presentación profesional en formato de aplicación interactiva de alto rendimiento.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/AMBoulchouk/amboulchouk.github.io",
    demoUrl: "https://amboulchouk.github.io"
  },
  {
    title: "NumerenTF2",
    description: "Proyecto en JavaScript orientado a funcionalidades interactivas y lógica de aplicación interactiva basada en el ecosistema Team Fortress 2.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    repoUrl: "https://github.com/AMBoulchouk/numentf2"
  },
  {
    title: "DH Middleware",
    description: "Proyecto enfocado en el desarrollo e implementación de middlewares personalizados, ruteo y lógica de backend en Node.js.",
    technologies: ["JavaScript", "Node.js", "Express"],
    repoUrl: "https://github.com/AMBoulchouk/DH-middleware"
  },
  {
    title: "Machine Systems",
    description: "Sistema y herramientas de backend orientadas a la automatización, monitorización y optimización de procesos del sistema.",
    technologies: ["Python", "FastAPI", "Docker", "Shell Scripting"],
    repoUrl: "https://github.com/AMBoulchouk/MACHINE-SYSTEMS"
  }
];
