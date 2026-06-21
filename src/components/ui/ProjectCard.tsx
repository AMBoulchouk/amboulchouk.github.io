import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../data/projects';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel glass-panel-hover flex flex-col h-full rounded-2xl overflow-hidden p-6 relative group"
    >
      {/* Visual Accent glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-blue/30 to-accent-violet/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex-grow">
        <h3 className="font-display text-xl font-bold mb-3 text-white group-hover:text-accent-blue transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código del proyecto ${project.title}`}
            className="flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-white transition-colors duration-200"
          >
            <GithubIcon className="w-4.5 h-4.5" />
            <span>Código</span>
          </a>
          
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo en vivo del proyecto ${project.title}`}
              className="flex items-center gap-2 text-xs font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors duration-200"
            >
              <ExternalLink className="w-4.5 h-4.5" />
              <span>Ver Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
