import React from 'react';
import { MessageCircle } from 'lucide-react';
import CTAButton from '../ui/CTAButton';
import { useScrollReveal } from '../animations/useGsapAnimation';
import gsap from 'gsap';

const CTA: React.FC = () => {
  const containerRef = useScrollReveal((el) => {
    return gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        }
      }
    );
  });

  return (
    <section className="bg-white pb-24 px-6 relative z-10">
      <div 
        ref={containerRef}
        className="max-w-4xl mx-auto bg-bg-primary text-center px-8 py-16 md:py-20 rounded-sm shadow-2xl relative overflow-hidden"
      >
        {/* Subtle texture or shine */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        
        <div className="w-16 h-16 bg-accent-gold rounded-lg flex items-center justify-center mx-auto mb-8 shadow-lg shadow-accent-gold/20">
          <MessageCircle size={32} className="text-bg-primary" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight max-w-2xl mx-auto font-medium">
          Não deixe o tempo levar o que é seu. Cada dia sem recorrer pode afastar você do seu direito.
        </h2>

        <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto font-light">
          Você se dedicou e trabalhou. Não aceite que um erro burocrático encerre seu ciclo. 
          Nossa equipe está pronta para analisar a viabilidade do seu caso agora mesmo.
        </p>

        <div className="flex justify-center">
          <CTAButton 
            text="Quero analisar meu caso" 
            subText="✦ Atendimento em todo o Brasil" 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;