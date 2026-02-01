import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import CTAButton from '../ui/CTAButton';
import { useScrollReveal } from '../animations/useGsapAnimation';
import gsap from 'gsap';

const AboutLawyer: React.FC = () => {
  const containerRef = useScrollReveal((el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
      }
    });

    tl.fromTo(".al-img", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(".al-content", { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.8");

    return tl;
  });

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image with Arch */}
        <div className="al-image relative flex justify-center order-2 lg:order-1">
           {/* Background shape */}
           <div className="absolute top-10 left-0 lg:left-10 w-full h-[90%] bg-[#dcc48a]/30 rounded-t-full z-0 transform -rotate-3 scale-95"></div>
           
           <div className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-t-[250px] overflow-hidden bg-gray-100 shadow-xl">
             <img 
              src="https://res.cloudinary.com/dmbu8fvsd/image/upload/v1769903277/942f404f-56e5-4602-b456-40dd107a7295.png"
              alt="Onzy ADV Fundadora"
              className="w-full h-full object-cover object-top"
             />
           </div>
        </div>

        {/* Content */}
        <div className="al-content order-1 lg:order-2">
          <SectionBadge text="Quem vai lutar pelo seu caso?" variant="light" />
          <h2 className="font-serif text-4xl md:text-5xl text-bg-primary mb-6 font-medium">Onzy ADV</h2>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10 font-sans">
            <p>
              Fundadora do escritório Onzy ADV, lidero uma equipe comprometida com um propósito claro: 
              combater as injustiças que impedem pessoas competentes de alcançarem seus objetivos.
            </p>
            <p>
              Com uma estrutura moderna e uma equipe distribuída pelo Brasil, unimos a tecnologia à advocacia humanizada. 
              Para mim, você não é apenas um número de processo; você é alguém que dedicou tempo e esforço.
            </p>
            <p>
              Minha missão é usar a técnica jurídica para garantir que a única barreira entre você e seu objetivo seja o seu próprio mérito, e não a arbitrariedade de terceiros.
            </p>
          </div>
          
          <CTAButton 
            text="Fale diretamente com minha equipe" 
            subText="✦ Atendimento em todo o Brasil"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutLawyer;