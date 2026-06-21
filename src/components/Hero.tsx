import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Sparkles, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-primary bg-grid-pattern"
    >
      {/* Ambient Lights */}
      <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full ambient-light-1 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full ambient-light-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Sparkles / Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-medium text-accent-blue mb-8 border border-white/5"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-accent-violet" />
          <span>Disponible para nuevos desafíos</span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1 text-text-secondary">
            <MapPin className="w-3 h-3 text-slate-500" />
            Córdoba, AR
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          {profile.name}
        </motion.h1>

        {/* Roles/Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-xl font-medium tracking-wide bg-gradient-to-r from-accent-blue via-indigo-300 to-accent-violet bg-clip-text text-transparent mb-6 max-w-3xl"
        >
          {profile.role}
        </motion.div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="font-display text-2xl md:text-3xl font-bold text-slate-200 mb-8"
        >
          &ldquo;{profile.tagline}&rdquo;
        </motion.h2>

        {/* Summary Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl text-text-secondary text-sm md:text-base leading-relaxed mb-10"
        >
          {profile.summary}
        </motion.p>

        {/* Buttons / Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <a
            href="#proyectos"
            className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet text-white hover:opacity-95 shadow-lg shadow-accent-blue/10 transition-all duration-200 hover:scale-105 group"
          >
            <span>Ver Proyectos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="#contacto"
            className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-900 border border-slate-800 text-white hover:border-slate-700 transition-all duration-200 hover:scale-105"
          >
            <Mail className="w-4 h-4 text-text-secondary" />
            <span>Contactarme</span>
          </a>

          <a
            href="/cv-alex-boulchouk.pdf"
            download
            aria-label="Descargar currículum en formato PDF"
            className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-950/50 border border-white/5 text-text-secondary hover:text-white hover:border-white/10 transition-all duration-200 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Descargar CV</span>
          </a>
        </motion.div>
      </div>
      
      {/* Down arrow decorator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-text-secondary font-semibold">Scroll</span>
        <div className="w-1 h-3 rounded-full bg-slate-600" />
      </div>
    </section>
  );
};
