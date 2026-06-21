import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ui/ProjectCard';
import { SectionTitle } from './ui/SectionTitle';

export const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Proyectos Destacados" 
          subtitle="Una selección de trabajos, herramientas y demostraciones técnicas en las que he participado." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
