import React from 'react';

interface SectionBadgeProps {
  text: string;
  variant?: 'dark' | 'light' | 'outline';
  center?: boolean;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ text, variant = 'dark', center = false }) => {
  let className = "inline-block mb-6 uppercase tracking-[3px] text-xs font-semibold font-sans py-2 ";
  
  if (variant === 'outline') {
    className += "text-accent-gold border border-accent-gold/30 px-4 rounded-sm";
  } else if (variant === 'light') {
    className += "text-accent-gold-dark"; // Darker gold for light backgrounds
  } else {
    className += "text-accent-gold";
  }

  return (
    <div className={center ? 'text-center' : ''}>
      <div className={className}>
        {text}
      </div>
    </div>
  );
};

export default SectionBadge;