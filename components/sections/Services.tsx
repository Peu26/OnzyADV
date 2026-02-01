import React from 'react';
import { Scale, Briefcase, Building2, HeartHandshake, ShoppingBag, Landmark, Play } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';
import { useScrollReveal } from '../animations/useGsapAnimation';
import gsap from 'gsap';

const Services: React.FC = () => {
  const gridRef = useScrollReveal((el) => {
    return gsap.fromTo(
      ".service-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  });

  return (
    <section id="servicos" className="py-24 bg-bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionBadge text="Serviços Especializados" center />
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium">
            Em quais casos conseguimos reverter a situação?
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="service-card group bg-[#0c0c0f] border border-white/5 p-10 hover:border-accent-gold/30 transition-all duration-300">
            <h3 className="text-xl font-serif font-bold text-white mb-4">Direito Civil e Contratos</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Revisão de contratos abusivos, ações indenizatórias e disputas de propriedade. Defesa contra cláusulas leoninas e proteção patrimonial.
            </p>
            <span className="text-accent-gold text-xs font-bold uppercase tracking-widest group-hover:underline">Saiba mais</span>
          </div>

          {/* Card 2 - Video/Highlight Style */}
          <div className="service-card relative h-[300px] md:h-auto lg:row-span-2 group overflow-hidden bg-bg-card border border-white/5">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <img 
              src="https://res.cloudinary.com/dmbu8fvsd/image/upload/v1769903277/942f404f-56e5-4602-b456-40dd107a7295.png" 
              alt="Advogada" 
              className="w-full h-full object-cover object-top opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-accent-gold/90 rounded-full flex items-center justify-center pl-1 mb-4 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                <Play fill="black" size={24} className="text-black" />
              </div>
              <p className="text-white font-serif italic text-lg">Clique para saber mais</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card group bg-[#0c0c0f] border border-white/5 p-10 hover:border-accent-gold/30 transition-all duration-300">
            <h3 className="text-xl font-serif font-bold text-white mb-4">Direito Trabalhista</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Reversão de justa causa, reconhecimento de vínculo, horas extras e indenizações por assédio ou danos morais no ambiente de trabalho.
            </p>
            <span className="text-accent-gold text-xs font-bold uppercase tracking-widest group-hover:underline">Saiba mais</span>
          </div>

          {/* Card 4 */}
          <div className="service-card group bg-[#0c0c0f] border border-white/5 p-10 hover:border-accent-gold/30 transition-all duration-300">
            <h3 className="text-xl font-serif font-bold text-white mb-4">Direito Empresarial</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Dissolução de sociedade, apuração de haveres, defesa em execuções fiscais e consultoria preventiva para blindagem jurídica.
            </p>
            <span className="text-accent-gold text-xs font-bold uppercase tracking-widest group-hover:underline">Saiba mais</span>
          </div>

          {/* Card 5 */}
          <div className="service-card group bg-[#0c0c0f] border border-white/5 p-10 hover:border-accent-gold/30 transition-all duration-300">
            <h3 className="text-xl font-serif font-bold text-white mb-4">Direito do Consumidor</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Negativação indevida, problemas com planos de saúde, atraso na entrega de imóveis e vícios ocultos em produtos ou serviços.
            </p>
            <span className="text-accent-gold text-xs font-bold uppercase tracking-widest group-hover:underline">Saiba mais</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;