import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import CTAButton from '../ui/CTAButton';
import { useScrollReveal } from '../animations/useGsapAnimation';
import gsap from 'gsap';
import { CheckCircle2 } from 'lucide-react';

const AboutProblem: React.FC = () => {
  const containerRef = useScrollReveal((el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
    
    tl.fromTo(".ap-image-wrapper", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(".ap-text", { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.7");
      
    return tl;
  });

  return (
    <section ref={containerRef} className="py-24 bg-white text-bg-primary">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image with Arch Mask and Beige Blob */}
        <div className="ap-image-wrapper relative flex justify-center lg:justify-end pr-0 lg:pr-12">
          {/* Beige decorative blob behind */}
          <div className="absolute top-10 right-0 lg:-right-6 w-3/4 h-full bg-accent-gold rounded-tl-[100px] rounded-br-[100px] z-0 opacity-30"></div>
          
          {/* Arch Image */}
          <div className="relative z-10 w-full max-w-md aspect-[3/4] overflow-hidden rounded-t-[200px] rounded-b-none shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1000&auto=format&fit=crop" 
              alt="Mãos assinando documento" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Content */}
        <div className="ap-text">
          <SectionBadge text="Especialista em Resolução de Conflitos" variant="light" />
          <h2 className="font-serif text-4xl md:text-5xl text-bg-primary mb-8 leading-tight font-medium">
            A Justiça erra. E você <br/>
            <span className="italic text-accent-gold-dark">não pode pagar por isso.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 mb-10 leading-relaxed font-sans">
            <p>
              Muitos acreditam que não há como mudar uma decisão ou um contrato. Isso não é verdade. 
              Se há irregularidade, há solução — e nós sabemos exatamente onde procurá-la.
            </p>
            <p>
              Se você foi prejudicado por erros materiais, cobranças abusivas ou negativas indevidas, 
              você pode ser vítima de uma ilegalidade que o judiciário deve corrigir.
            </p>
            <p className="font-medium text-bg-primary">
              O tempo corre contra você. Não deixe seu direito prescrever.
            </p>
          </div>

          <CTAButton text="Quero analisar meu caso" onClick={() => window.open('https://wa.me/5511999999999', '_blank')} />
          
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
             <CheckCircle2 size={16} className="text-accent-gold-dark" />
             <span>Atendimento digital em todo o Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProblem;