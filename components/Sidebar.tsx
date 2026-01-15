import React from 'react';
import { Search, TrendingUp, Tag, Mail, ExternalLink } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-8">
      {/* Search Widget */}
      <div className="glass-panel p-6 rounded-xl">
        <h4 className="font-display font-bold text-lg mb-4 text-white flex items-center gap-2">
          <Search className="w-5 h-5 text-brand-accent" /> Búsqueda
        </h4>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Buscar en el archivo..." 
            className="w-full bg-slate-900/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
          />
          <button className="absolute right-3 top-3 text-slate-400 hover:text-white">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories / Tags Widget */}
      <div className="glass-panel p-6 rounded-xl">
        <h4 className="font-display font-bold text-lg mb-4 text-white flex items-center gap-2">
          <Tag className="w-5 h-5 text-brand-accent" /> Temas Calientes
        </h4>
        <div className="flex flex-wrap gap-2">
          {['Selección Argentina', 'Maradona', 'Messi', 'Boca Juniors', 'River Plate', 'Premier League', 'Champions', 'Escándalos', 'Opinión'].map((tag) => (
            <a 
              key={tag} 
              href="#" 
              className="px-3 py-1 bg-slate-800/50 hover:bg-brand-blue border border-white/5 rounded-full text-xs text-slate-300 hover:text-white transition-all"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>

      {/* Trending / "Lo más leído" */}
      <div className="glass-panel p-6 rounded-xl">
        <h4 className="font-display font-bold text-lg mb-4 text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-brand-accent" /> Destacado
        </h4>
        <ul className="space-y-4">
          {[
            { title: '¿Por qué la pelota ya no dobla como antes?', date: 'Hace 2 días' },
            { title: 'El análisis táctico del Superclásico', date: 'Hace 5 días' },
            { title: 'Los millones de la liga árabe', date: 'Hace 1 semana' },
          ].map((item, idx) => (
            <li key={idx} className="group cursor-pointer">
              <h5 className="text-sm font-semibold text-slate-200 group-hover:text-brand-accent transition-colors leading-tight mb-1">
                {item.title}
              </h5>
              <span className="text-xs text-slate-500">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>

       {/* Newsletter */}
       <div className="relative rounded-xl overflow-hidden p-6 bg-gradient-to-br from-brand-blue to-brand-dark border border-white/10">
        <div className="relative z-10">
          <h4 className="font-display font-bold text-xl mb-2 text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-brand-accent" /> Suscríbete
          </h4>
          <p className="text-sm text-blue-200 mb-4">
            Recibe los mejores análisis y la ironía de siempre en tu correo.
          </p>
          <input 
            type="email" 
            placeholder="tu@email.com" 
            className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-sm text-white mb-3 placeholder-blue-300 focus:outline-none focus:bg-white/20"
          />
          <button className="w-full py-2 bg-brand-accent text-brand-dark font-bold text-sm rounded-lg hover:bg-yellow-400 transition-colors uppercase tracking-wide">
            Enviar
          </button>
        </div>
        {/* Abstract circle decoration */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      {/* Links Archive */}
      <div className="glass-panel p-6 rounded-xl">
         <h4 className="font-display font-bold text-lg mb-4 text-white flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-brand-accent" /> Enlaces
        </h4>
        <ul className="space-y-2 text-sm text-slate-400">
           <li className="hover:text-brand-accent cursor-pointer transition-colors">→ Olé</li>
           <li className="hover:text-brand-accent cursor-pointer transition-colors">→ Cancha Llena</li>
           <li className="hover:text-brand-accent cursor-pointer transition-colors">→ El Gráfico</li>
           <li className="hover:text-brand-accent cursor-pointer transition-colors">→ TyC Sports</li>
        </ul>
      </div>

    </aside>
  );
};