import React from 'react';

const MarqueeStrip: React.FC = () => {
  const items = [
    "Onzy ADV", "Direito Civil", "Trabalhista", "Empresarial", 
    "Onzy ADV", "Direito Civil", "Trabalhista", "Empresarial",
    "Onzy ADV", "Direito Civil", "Trabalhista", "Empresarial",
    "Onzy ADV", "Direito Civil", "Trabalhista", "Empresarial",
  ];

  return (
    <div className="w-full bg-white border-y border-gray-100 py-5 overflow-hidden relative z-20">
      <div className="flex w-[200%] animate-marquee">
        {items.map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-accent-gold-dark font-serif text-xl md:text-2xl mx-8 font-medium tracking-wider whitespace-nowrap">
              {item}
            </span>
            <span className="text-accent-gold-dark/40 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;