import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { FeaturedPost } from './components/FeaturedPost';
import { PostCard } from './components/PostCard';
import { MOCK_POSTS } from './constants';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#000428] to-[#004e92] text-slate-200 font-sans selection:bg-brand-accent selection:text-brand-dark flex flex-col">
      {/* Decorative background elements to mimic the curves of the original design but modernized */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-brand-blue/20 blur-[100px] rounded-full transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 blur-[120px] rounded-full transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <Header />

      <main className="container mx-auto px-4 py-8 relative z-10 flex-grow">
        
        {loading ? (
          <div className="min-h-[60vh] flex flex-col items-center justify-center">
             <Loader2 className="w-12 h-12 text-brand-accent animate-spin mb-4" />
             <p className="text-brand-accent/80 font-display tracking-widest text-sm animate-pulse">CARGANDO ARCHIVO...</p>
          </div>
        ) : (
          <>
            {/* Featured Section */}
            <FeaturedPost post={MOCK_POSTS[2]} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Content Column */}
              <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display font-bold text-2xl text-white border-l-4 border-brand-accent pl-4">
                    Últimas Publicaciones
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MOCK_POSTS.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Pagination / Load More */}
                <div className="mt-12 flex justify-center">
                  <button className="px-8 py-3 bg-white/5 hover:bg-brand-accent hover:text-brand-dark border border-white/10 rounded-full font-bold transition-all duration-300">
                    CARGAR MÁS NOTICIAS
                  </button>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <Sidebar />
                </div>
              </div>

            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;