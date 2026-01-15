import React, { useState } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-brand-dark font-display font-bold text-xl shadow-[0_0_15px_rgba(251,191,36,0.5)]">
              LP
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white uppercase italic">
                La Pelota No Dobla
              </h1>
              <p className="text-xs text-brand-accent font-medium tracking-widest hidden sm:block">
                FÚTBOL, POLÍTICA Y CULTURA DESDE 2008
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-brand-accent transition-colors">Inicio</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Fútbol Argentino</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Europa</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Selección</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Opinión</a>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <nav className="flex flex-col gap-4 text-center text-slate-300">
              <a href="#" className="block py-2 hover:bg-white/5 rounded-lg">Inicio</a>
              <a href="#" className="block py-2 hover:bg-white/5 rounded-lg">Fútbol Argentino</a>
              <a href="#" className="block py-2 hover:bg-white/5 rounded-lg">Europa</a>
              <a href="#" className="block py-2 hover:bg-white/5 rounded-lg">Selección</a>
              <a href="#" className="block py-2 hover:bg-white/5 rounded-lg">Opinión</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};