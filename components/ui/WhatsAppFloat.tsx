import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent-gold hover:scale-110 transition-transform duration-300 p-4 rounded-full shadow-lg flex items-center justify-center text-white"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </a>
  );
};

export default WhatsAppFloat;