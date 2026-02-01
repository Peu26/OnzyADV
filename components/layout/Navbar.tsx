import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger effect after scrolling 30px
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <>
      <nav
        className={`
          fixed z-50 left-1/2 -translate-x-1/2 flex items-center justify-between
          transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${isScrolled 
            ? 'top-4 md:top-6 w-[95%] md:w-[750px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
            : 'top-0 w-full bg-transparent border-b border-transparent py-8 px-6 md:px-12 rounded-none'
          }
        `}
      >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className={`font-serif text-2xl font-bold tracking-tight transition-transform duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <span className="text-accent-gold">ONZY</span>
              <span className="text-white text-sm ml-1 font-sans font-light tracking-widest">ADV</span>
            </div>
          </a>

          {/* Desktop Menu - Zoom Effect on Gap */}
          <div className={`hidden md:flex items-center transition-all duration-700 ${isScrolled ? 'gap-4' : 'gap-10'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-primary hover:text-accent-gold transition-colors font-sans uppercase tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contato"
              className={`
                border border-accent-gold text-accent-gold rounded-full text-sm uppercase tracking-wide 
                hover:bg-accent-gold hover:text-bg-primary transition-all duration-300 font-medium
                ${isScrolled ? 'px-5 py-1.5' : 'px-6 py-2'}
              `}
            >
              Contato
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-accent-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-40 bg-[#050507]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8
          transition-all duration-500 ease-in-out md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}
        `}
      >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-serif text-white hover:text-accent-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="mt-4 px-8 py-3 bg-accent-gold text-bg-primary font-bold rounded-full text-lg shadow-lg shadow-accent-gold/20"
            onClick={() => setIsOpen(false)}
          >
            Fale com a Onzy
          </a>

          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
      </div>
    </>
  );
};

export default Navbar;