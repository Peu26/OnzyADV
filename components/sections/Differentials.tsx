import React from 'react';
import { Zap, DollarSign, MessageSquare, Clock } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';
import { useScrollReveal } from '../animations/useGsapAnimation';
import gsap from 'gsap';

const Differentials: React.FC = () => {
  const containerRef = useScrollReveal((el) => {
    return gsap.fromTo(
      ".diff-card",
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 1, 
        scale: 1, 
        stagger: 0.15, 
        duration: 0.6,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        }
      }
    );
  });

  const items = [
    { 
      title: "Atuação 100% Digital e Nacional", 
      description: "Não importa se você está no Norte ou no Sul. O processo é eletrônico e nossa estrutura é digital. Resolvemos tudo sem você precisar sair de casa.",
      icon: Zap 
    },
    { 
      title: "Honorários Flexíveis (Foco no Êxito)", 
      description: "Sabemos que o momento pode ser delicado. Trabalhamos com entrada reduzida e a maior parte dos honorários é paga apenas no sucesso da ação.",
      icon: DollarSign 
    },
    { 
      title: "Transparência Radical", 
      description: "Chega de advogados que somem. Aqui, você é informado a cada movimentação. Explicamos cada passo com linguagem clara e humana.",
      icon: MessageSquare 
    },
    { 
      title: "Agilidade no Protocolo", 
      description: "Cada dia importa. Com a documentação completa, protocolamos sua ação em até 3 dias úteis para garantir seu direito.",
      icon: Clock 
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-[#08080a] relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <SectionBadge text="Diferenciais e Metodologia" center />
           <h2 className="font-serif text-4xl md:text-5xl text-white font-medium">Advocacia de Elite ao Alcance de Todos</h2>
           <p className="text-text-muted mt-4">Por que escolher a Onzy ADV?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((diff, index) => (
            <div key={index} className="diff-card flex flex-col sm:flex-row gap-6 bg-[#0f0f12] p-8 border border-white/5 rounded-sm hover:border-accent-gold/20 transition-colors">
              <div className="shrink-0">
                <div className="w-14 h-14 bg-accent-gold rounded-lg flex items-center justify-center text-bg-primary shadow-lg shadow-accent-gold/10">
                  <diff.icon size={28} strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{diff.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{diff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;