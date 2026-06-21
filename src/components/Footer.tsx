import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { profile } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Info & Credits */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-text-secondary">
            &copy; {currentYear} {profile.name}. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-slate-500 flex items-center justify-center md:justify-start gap-1">
            Built with React, TypeScript and Tailwind CSS.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al perfil de GitHub de Alex"
            className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-white/5 text-text-secondary hover:text-white hover:border-slate-700 transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al perfil de LinkedIn de Alex"
            className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-white/5 text-text-secondary hover:text-white hover:border-slate-700 transition-all duration-200"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Enviar un correo electrónico a Alex"
            className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-white/5 text-text-secondary hover:text-white hover:border-slate-700 transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
