import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
        {title}
      </h2>
      <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet" />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-text-secondary text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
