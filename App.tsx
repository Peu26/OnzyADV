import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import MarqueeStrip from './components/sections/MarqueeStrip';
import AboutProblem from './components/sections/AboutProblem';
import Services from './components/sections/Services';
import Differentials from './components/sections/Differentials';
import Testimonials from './components/sections/Testimonials';
import AboutLawyer from './components/sections/AboutLawyer';
import CTA from './components/sections/CTA';
import FAQ from './components/sections/FAQ';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans selection:bg-accent-gold selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <MarqueeStrip />
        <AboutProblem />
        <Services />
        <Differentials />
        <Testimonials />
        <AboutLawyer />
        <CTA />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;