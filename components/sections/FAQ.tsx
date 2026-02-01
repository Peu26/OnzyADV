import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import { FAQItem } from '../../types';

const faqItems1: FAQItem[] = [
  { question: "Quais são as etapas do processo?" },
  { question: "Moro longe do escritório, como funciona o atendimento?" },
  { question: "Preciso estar na mesma cidade do escritório?" },
  { question: "Como eu acompanho o andamento da ação?" },
  { question: "Existe prazo pra entrar com a ação?" },
  { question: "Quanto custa pra entrar com a ação?" },
  { question: "Como saber se meu caso é viável?" },
  { question: "Fui prejudicado no contrato. Isso tem solução?" },
  { question: "Tive um problema na empresa. Ainda dá pra recorrer?" },
];

const faqItems2: FAQItem[] = [
  { question: "Qual o tipo de ação que vocês entram?" },
  { question: "Se eu entrar na Justiça, posso ser punido ou perder chances futuras?" },
  { question: "Quanto tempo demora um processo judicial?" },
  { question: "Qual é a chance de eu ganhar?" },
  { question: "E se o erro foi meu? Ainda vale a pena tentar?" },
  { question: "O que é a liminar?" },
  { question: "O que significa 'garantia processual'?" },
  { question: "Nenhum advogado pode prometer vitória" },
  { question: "O que o cliente pode esperar, de forma realista?" },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-bg-primary max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <SectionBadge text="FAQ" variant="outline" />
        <h2 className="font-serif text-4xl text-white font-medium">Perguntas frequentes</h2>
        <p className="text-text-muted mt-2">Confira algumas <strong className="text-accent-gold">dúvidas</strong> que mais recebemos:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        <div className="space-y-6">
          {faqItems1.map((item, index) => (
            <div key={index} className="border-b border-white/5 pb-4 group hover:border-accent-gold/30 transition-colors">
              <p className="text-text-primary group-hover:text-white transition-colors">
                <span className="text-accent-gold mr-3 text-sm">{index + 1}.</span>
                {item.question}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-6">
           {faqItems2.map((item, index) => (
            <div key={index + 9} className="border-b border-white/5 pb-4 group hover:border-accent-gold/30 transition-colors">
              <p className="text-text-primary group-hover:text-white transition-colors">
                <span className="text-accent-gold mr-3 text-sm">{index + 10}.</span>
                {item.question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;