import React from 'react';
import { experiences } from '../data/experience';
import { ExperienceItem } from './ui/ExperienceItem';
import { SectionTitle } from './ui/SectionTitle';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-accent-violet/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Experiencia Laboral" 
          subtitle="Mi trayectoria profesional liderando equipos, diseñando arquitecturas y desarrollando software." 
        />

        <div className="relative mt-16">
          {/* Vertical central line */}
          <div className="absolute left-[13px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue/40 via-accent-violet/40 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={`${exp.company}-${exp.role}`} 
                exp={exp} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
