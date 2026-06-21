import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users2, BrainCircuit } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionTitle } from './ui/SectionTitle';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-accent-blue" />,
      title: "Full Stack",
      desc: "+7 años de experiencia"
    },
    {
      icon: <Users2 className="w-5 h-5 text-accent-violet" />,
      title: "Liderazgo",
      desc: "Coordinación de equipos",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-emerald-400" />,
      title: "Soluciones",
      desc: "Arquitectura e IA"
    }
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Sobre mí" 
          subtitle="Conoce más sobre mi enfoque profesional, trayectoria y motivación." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-text-secondary text-base leading-relaxed"
          >
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Highlights / Dashboard Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="glass-panel p-5 rounded-2xl flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02] border border-white/5"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Elegant deco box */}
            <div className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col justify-center sm:col-span-3 lg:col-span-1 min-h-[100px] bg-gradient-to-tr from-bg-primary to-bg-secondary relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-1">Filosofía</div>
              <p className="text-xs text-slate-300 leading-relaxed z-10">
                Aprender continuamente, automatizar lo repetitivo e impulsar a los equipos a lograr su máximo potencial técnico.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
