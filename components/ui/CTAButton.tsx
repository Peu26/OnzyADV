import React from 'react';

interface CTAButtonProps {
  text: string;
  subText?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, subText, onClick, fullWidth = false }) => {
  return (
    <div className={`flex flex-col items-start ${fullWidth ? 'w-full' : ''}`}>
      <button
        onClick={onClick}
        className={`
          ${fullWidth ? 'w-full' : ''}
          bg-accent-gold hover:bg-accent-gold-light 
          text-[#0a0a0a] font-medium text-lg px-8 py-3 rounded-md 
          transition-all duration-300 transform hover:-translate-y-0.5
          shadow-[0_4px_14px_0_rgba(201,169,110,0.39)]
        `}
      >
        {text}
      </button>
      {subText && (
        <span className="mt-2 text-xs text-text-muted flex items-center gap-1 font-sans">
          {subText}
        </span>
      )}
    </div>
  );
};

export default CTAButton;