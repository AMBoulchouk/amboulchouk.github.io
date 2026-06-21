import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { profile } from '../data/profile';
import { SectionTitle } from './ui/SectionTitle';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Trabajemos juntos" 
          subtitle="¿Tienes un proyecto en mente, una vacante de liderazgo técnico o necesitas consultoría de software?" 
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl text-center border border-white/5 relative overflow-hidden"
        >
          {/* Subtle decoration background grids */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
            Estoy abierto a nuevos desafíos como Tech Lead, Full Stack Developer, consultor o colaborador en proyectos tecnológicos innovadores. Cuéntame sobre tu proyecto y veamos cómo puedo sumarme.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <a
              href={`mailto:${profile.email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet text-white hover:opacity-95 shadow-lg shadow-accent-blue/10 transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-4.5 h-4.5" />
              <span>Enviar email</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold rounded-xl bg-slate-900 border border-slate-800 text-white hover:border-slate-700 transition-all duration-200 hover:scale-105"
            >
              <GithubIcon className="w-4.5 h-4.5 text-text-secondary" />
              <span>Ver GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold rounded-xl bg-slate-900 border border-slate-800 text-white hover:border-slate-700 transition-all duration-200 hover:scale-105"
            >
              <LinkedinIcon className="w-4.5 h-4.5 text-text-secondary" />
              <span>Ver LinkedIn</span>
            </a>
          </div>
          
          <div className="mt-8 text-xs text-text-secondary/60">
            Email directo: <a href={`mailto:${profile.email}`} className="text-accent-blue hover:underline">{profile.email}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
