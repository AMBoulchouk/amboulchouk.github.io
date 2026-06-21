import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const Teaching: React.FC = () => {
  const stats = [
    { icon: <BookOpen className="w-5 h-5 text-accent-blue" />, value: "+5", label: "Cursos dictados" },
    { icon: <Users className="w-5 h-5 text-accent-violet" />, value: "+300", label: "Alumnos formados" },
    { icon: <Award className="w-5 h-5 text-emerald-400" />, value: "2", label: "Instituciones prestigiosas" }
  ];

  return (
    <section id="docencia" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Teaching & Mentoring" 
          subtitle="Formando a la próxima generación de desarrolladores de software y líderes técnicos." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
          {/* Illustration/Stats Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-2xl flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-bold text-white leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Core Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              {/* Decorative top icon */}
              <GraduationCap className="absolute -right-6 -bottom-6 w-32 h-32 text-white/2 pointer-events-none" />

              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Pasión por la educación técnica
              </h3>
              
              <div className="text-text-secondary text-base leading-relaxed space-y-4">
                <p>
                  Además del trabajo en desarrollo de software, tengo experiencia formando nuevos desarrolladores en instituciones reconocidas como <strong className="text-white">Digital House</strong> e <strong className="text-white">INTI</strong>.
                </p>
                <p>
                  He dictado contenidos sobre desarrollo web full stack, backend, frontend, bases de datos relacionales y no relacionales, buenas prácticas, resolución de problemas bajo presión y la construcción de proyectos integradores reales desde cero.
                </p>
                <p>
                  Considero que transmitir el conocimiento no solo ayuda a otros a crecer, sino que también solidifica la propia base técnica y afina las habilidades de comunicación y empatía, claves para cualquier liderazgo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
