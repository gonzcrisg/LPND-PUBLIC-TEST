import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-brand-dark font-display font-bold text-sm">
                  LP
                </div>
                <h2 className="font-display text-xl font-bold text-white uppercase italic">
                  La Pelota No Dobla
                </h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Un espacio dedicado al análisis futbolístico, la cultura del deporte y la política que rodea al balón. Mantenemos la esencia crítica desde 2008, adaptándonos a los nuevos tiempos pero sin perder la identidad.
              </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Secciones</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Fútbol Argentino</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Internacional</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Opinión</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Archivo 2008</a></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal</h3>
             <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2008 - 2024 La Pelota No Dobla. Todos los derechos reservados.</p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-6 h-6 bg-slate-800 rounded-full hover:bg-brand-accent transition-colors cursor-pointer"></div>
             <div className="w-6 h-6 bg-slate-800 rounded-full hover:bg-brand-accent transition-colors cursor-pointer"></div>
             <div className="w-6 h-6 bg-slate-800 rounded-full hover:bg-brand-accent transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};