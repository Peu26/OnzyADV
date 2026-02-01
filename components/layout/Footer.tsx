import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#050505] pt-16 pb-8 border-t border-accent-gold/10 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6">
            <span className="text-accent-gold font-serif text-3xl font-bold">ONZY</span>
            <span className="text-white text-sm ml-1 font-sans font-light tracking-widest">ADV</span>
          </div>
          <p className="text-text-muted text-sm max-w-sm mb-6">
            Advocacia especializada em Direito Civil, Trabalhista e Empresarial. 
            Compromisso com a verdade, transparência e resultados.
          </p>
          <div className="text-accent-gold text-sm font-medium">
            ✦ Atendimento em todo o Brasil
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-3 text-sm text-text-muted">
            <li><a href="#hero" className="hover:text-accent-gold transition-colors">Início</a></li>
            <li><a href="#servicos" className="hover:text-accent-gold transition-colors">Serviços</a></li>
            <li><a href="#diferenciais" className="hover:text-accent-gold transition-colors">Diferenciais</a></li>
            <li><a href="#contato" className="hover:text-accent-gold transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent-gold hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent-gold hover:text-black transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent-gold hover:text-black transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-text-muted/60">
        <p>© 2025 Onzy ADV. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido para excelência jurídica.</p>
      </div>
    </footer>
  );
};

export default Footer;