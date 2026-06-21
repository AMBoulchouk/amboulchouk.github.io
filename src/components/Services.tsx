import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitBranch, Lightbulb, GraduationCap } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionTitle } from './ui/SectionTitle';

const serviceIcons = [
  <Code2 className="w-6 h-6 text-accent-blue" key="code" />,
  <GitBranch className="w-6 h-6 text-accent-violet" key="git" />,
  <Lightbulb className="w-6 h-6 text-emerald-400" key="bulb" />,
  <GraduationCap className="w-6 h-6 text-amber-400" key="grad" />
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Qué Puedo Aportar" 
          subtitle="Mis servicios principales orientados a impulsar productos, equipos y proyectos tecnológicos." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {profile.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col h-full group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5 shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {serviceIcons[index] || <Code2 className="w-6 h-6 text-slate-400" />}
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
