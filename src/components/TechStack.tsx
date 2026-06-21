import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionTitle } from './ui/SectionTitle';

const categoryIcons: { [key: string]: React.ReactNode } = {
  "Frontend": <Layout className="w-5 h-5 text-accent-blue" />,
  "Backend": <Server className="w-5 h-5 text-accent-violet" />,
  "Bases de datos": <Database className="w-5 h-5 text-emerald-400" />,
  "Cloud & Tools": <Wrench className="w-5 h-5 text-amber-400" />
};

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Stack Tecnológico" 
          subtitle="Herramientas y tecnologías que utilizo para construir productos modernos y escalables." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {profile.techStack.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-slate-700/60 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5 shadow-inner">
                  {categoryIcons[group.category] || <Wrench className="w-5 h-5 text-slate-400" />}
                </div>
                <h3 className="font-display font-bold text-white text-base">
                  {group.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-950/40 text-slate-300 border border-white/5 hover:border-accent-blue/20 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
