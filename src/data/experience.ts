export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "Tech Lead",
    company: "Mindfactory",
    period: "oct. 2025 - actualidad",
    location: "Córdoba, Argentina · Híbrido",
    description: "Liderazgo técnico de equipos de desarrollo, toma de decisiones de arquitectura y coordinación de soluciones web para clientes y productos digitales."
  },
  {
    role: "Consultor externo",
    company: "Irazu Labs",
    period: "dic. 2025 - feb. 2026",
    location: "Costa Rica · Remoto",
    description: "Consultoría empresarial y tecnológica, acompañando procesos de análisis, desarrollo e implementación de soluciones digitales."
  },
  {
    role: "Full Stack Developer / Líder de Proyecto",
    company: "SODEVIA",
    period: "jul. 2024 - nov. 2025",
    location: "Córdoba, Argentina · Híbrido",
    description: "Desarrollo y liderazgo técnico en proyectos para clientes del sector público y privado. Coordinación de tareas, diseño de soluciones y acompañamiento técnico del equipo."
  },
  {
    role: "Full Stack Developer / Líder Técnico",
    company: "Reeon Software Engineering",
    period: "ene. 2024 - abr. 2025",
    location: "Córdoba, Argentina · Híbrido",
    description: "Liderazgo técnico en proyectos de desarrollo web para clientes privados. Coordinación de desarrolladores junior, revisión técnica e implementación de funcionalidades."
  },
  {
    role: "Gerente de Software",
    company: "Controles de Radar S.A.",
    period: "jun. 2021 - ene. 2025",
    location: "Córdoba, Argentina · Híbrido",
    description: "Liderazgo del equipo de desarrollo, mejora continua de sistemas internos, planificación técnica y gestión de soluciones de software."
  },
  {
    role: "Instructor Full Stack",
    company: "Digital House",
    period: "nov. 2021 - feb. 2023",
    location: "Argentina · Remoto",
    description: "Docente del programa Full Stack Web Developer con foco en JavaScript, Node.js, Express, Sequelize, React y bases de datos relacionales."
  },
  {
    role: "Profesor de Entorno Virtual",
    company: "INTI",
    period: "ago. 2022 - jul. 2023",
    location: "Córdoba, Argentina · Remoto",
    description: "Formación en desarrollo web full stack, dictando clases sobre Angular, Java, Spring Boot y MySQL."
  }
];
