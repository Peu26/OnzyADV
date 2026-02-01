import React, { useEffect, useRef } from 'react';
import CTAButton from '../ui/CTAButton';
import SectionBadge from '../ui/SectionBadge';
import { Scale } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (textRef.current && imgContainerRef.current) {
      tl.fromTo(
        textRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        imgContainerRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-0 overflow-hidden bg-bg-primary">
      {/* Background Image/Texture - Lady Justice Faded */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop" 
          alt="Lady Justice Background" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/90 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 h-full">
        
        {/* Text Column */}
        <div ref={textRef} className="lg:col-span-6 flex flex-col items-start py-12">
          <SectionBadge text="Advocacia Especializada" variant="outline" />
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6">
            Não deixe que um <span className="text-accent-gold">erro administrativo</span> destrua anos de trabalho.
          </h1>
          
          <p className="font-sans text-text-muted text-lg leading-relaxed max-w-lg mb-10 border-l-2 border-accent-gold pl-6">
            Não aceite uma decisão injusta. Somos especialistas em reverter irregularidades e garantir que seus direitos sejam respeitados.
          </p>
          
          <div className="flex flex-col gap-6">
            <CTAButton 
              text="Quero analisar meu caso" 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            />
            
            <div className="flex items-center gap-6 text-sm text-text-muted font-sans mt-2">
               <div className="flex items-center gap-2">
                 <Scale size={16} className="text-accent-gold" />
                 <span>Atendimento em todo o Brasil</span>
               </div>
               <div className="flex items-center gap-2">
                 <Scale size={16} className="text-accent-gold" />
                 <span>Especialista em Direito Civil</span>
               </div>
            </div>
          </div>
        </div>

        {/* Image Column with Beige Background Stripe */}
        <div className="lg:col-span-6 h-full relative min-h-[500px] lg:min-h-[700px] flex items-end justify-center lg:justify-end">
          {/* Beige Stripe/Block Background */}
          <div className="absolute bottom-0 right-0 lg:right-10 w-[80%] lg:w-[70%] h-[90%] bg-[#dcc48a] rounded-t-full opacity-100 z-0"></div>
          
          {/* Main Image */}
          <div ref={imgContainerRef} className="relative z-10 w-full h-full flex items-end justify-center">
             <img 
               src="https://res.cloudinary.com/ddxo3s8an/image/upload/v1769904874/Design_sem_nome_54_qftd1a.png" 
               alt="Advogada Onzy" 
               className="relative max-h-[650px] lg:max-h-[800px] w-auto object-contain drop-shadow-2xl"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;