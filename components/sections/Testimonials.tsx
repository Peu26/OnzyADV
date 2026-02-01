import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import { Star } from 'lucide-react';

// --- Types & Data ---

interface TestimonialAuthor {
  name: string;
  handle: string; // Used for "Date/Time ago" in this context
  avatar: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  stars?: number;
}

const testimonials = [
  {
    author: {
      name: "Amanda de Melo",
      handle: "3 meses atrás",
      avatar: "https://ui-avatars.com/api/?name=Amanda+de+Melo&background=dcc48a&color=fff"
    },
    text: "Camila muito solícita e prática! Me atendeu rápido, responde bem. Adorei. Nota 10.",
    stars: 5
  },
  {
    author: {
      name: "Luiz Gustavo",
      handle: "2 meses atrás",
      avatar: "https://ui-avatars.com/api/?name=Luiz+Gustavo&background=dcc48a&color=fff"
    },
    text: "Muito bom o atendimento. Recomendo bastante, responde rápido e ouve o problema.",
    stars: 5
  },
  {
    author: {
      name: "Matheus Cardoso",
      handle: "4 meses atrás",
      avatar: "https://ui-avatars.com/api/?name=Matheus+Cardoso&background=dcc48a&color=fff"
    },
    text: "Recomendo bastante, equipe responde rápido, traz soluções completas e explica tudo.",
    stars: 5
  },
  {
    author: {
      name: "Leovando Oliveira",
      handle: "1 mês atrás",
      avatar: "https://ui-avatars.com/api/?name=Leovando+Oliveira&background=dcc48a&color=fff"
    },
    text: "Muito atenciosa e educada, observa muito bem as mensagens e sempre tira dúvidas.",
    stars: 5
  },
  {
    author: {
      name: "Ana Beatriz",
      handle: "5 meses atrás",
      avatar: "https://ui-avatars.com/api/?name=Ana+Beatriz&background=dcc48a&color=fff"
    },
    text: "Consegui reverter minha situação graças à Onzy. Profissionais de excelência.",
    stars: 5
  }
];

// --- Components ---

const TestimonialCard: React.FC<TestimonialCardProps> = ({ author, text, stars = 5 }) => {
  return (
    <div
      className={`
        flex flex-col rounded-xl border border-gray-200/60
        bg-white
        p-6 text-start
        shadow-[0_2px_8px_rgba(0,0,0,0.04)]
        hover:shadow-[0_4px_16px_rgba(201,169,110,0.15)]
        hover:border-accent-gold/30
        w-[350px] shrink-0
        transition-all duration-300
        mx-4
      `}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-bold leading-none text-gray-900 font-serif tracking-wide">
            {author.name}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {author.handle}
          </p>
        </div>
        <div className="ml-auto">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 opacity-60 grayscale" />
        </div>
      </div>
      
      <div className="flex text-accent-gold mb-3 gap-0.5">
         {[...Array(stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>

      <p className="text-sm text-gray-600 leading-relaxed font-sans">
        "{text}"
      </p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#f5f2ee] text-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <SectionBadge text="Depoimentos" variant="light" center />
        <h2 className="font-serif text-4xl md:text-5xl text-bg-primary font-medium mb-4 max-w-2xl">
           Quem confiou, hoje está mais perto do objetivo
        </h2>
        <p className="text-gray-500 max-w-xl">
          Veja o que nossos clientes dizem no Google e Redes Sociais:
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {/* Marquee Container */}
        <div className="group flex overflow-hidden py-4 w-full">
          <div className="flex shrink-0 animate-marquee flex-row group-hover:[animation-play-state:paused]">
            {[...Array(6)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f5f2ee] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f5f2ee] to-transparent z-10" />
      </div>
    </section>
  );
};

export default Testimonials;