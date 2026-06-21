import React from 'react';

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-slate-900/50 text-accent-blue border border-slate-800 transition-all duration-300 hover:border-accent-blue/30 hover:bg-slate-900/80 cursor-default">
      {text}
    </span>
  );
};
