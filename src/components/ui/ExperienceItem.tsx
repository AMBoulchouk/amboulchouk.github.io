import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import type { Experience } from '../../data/experience';

interface ExperienceItemProps {
  exp: Experience;
  index: number;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
      className={`relative flex flex-col md:flex-row md:justify-between items-start mb-12 group`}
    >
      {/* Timeline Node dot */}
      <div className="absolute left-0 md:left-1/2 md:-ml-3.5 top-0 w-7 h-7 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-accent-blue transition-colors duration-300 z-10 flex items-center justify-center">
        <Briefcase className="w-3.5 h-3.5 text-text-secondary group-hover:text-accent-blue transition-colors duration-300" />
      </div>

      {/* Content wrapper */}
      <div className={`pl-10 md:pl-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:order-last'}`}>
        <div className="glass-panel glass-panel-hover p-6 rounded-2xl relative">
          {/* Subtle indicator arrow/dot for card sides */}
          <div className={`absolute top-3.5 -left-1.5 w-3 h-3 rotate-45 bg-slate-900 border-l border-b border-white/8 md:block hidden ${
            index % 2 === 0 ? 'md:left-auto md:-right-1.5 md:border-l-0 md:border-r md:border-b-0 md:border-t' : ''
          }`} />

          <span className="text-xs font-semibold text-accent-blue flex items-center gap-1 mb-2 justify-start md:justify-start group-hover:text-accent-violet transition-colors duration-300">
            <Calendar className="w-3.5 h-3.5" />
            {exp.period}
          </span>
          
          <h3 className="font-display text-xl font-bold text-white mb-1">
            {exp.role}
          </h3>
          
          <div className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-1.5 flex-wrap">
            <span>{exp.company}</span>
            <span className="text-slate-600">•</span>
            <span className="text-text-secondary flex items-center gap-1 text-xs">
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed">
            {exp.description}
          </p>
        </div>
      </div>

      {/* Spacing for md and larger layouts */}
      <div className="hidden md:block w-[10%]" />
    </motion.div>
  );
};
