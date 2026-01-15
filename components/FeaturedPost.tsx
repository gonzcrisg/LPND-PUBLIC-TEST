import React from 'react';
import { BlogPost } from '../types';
import { MessageSquare, Calendar, ChevronRight } from 'lucide-react';

interface FeaturedPostProps {
  post: BlogPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group mb-12 border border-white/10">
      {/* Background Image */}
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-blue/80 to-transparent opacity-90"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4">
        <span className="inline-block px-3 py-1 bg-brand-accent text-brand-dark text-xs font-bold uppercase rounded-full mb-4">
          {post.category}
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
          {post.title}
        </h2>
        <p className="text-slate-300 text-lg mb-6 line-clamp-2 md:line-clamp-none">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            {post.commentsCount} Comentarios
          </span>
          <button className="ml-auto md:ml-0 flex items-center gap-2 text-brand-accent font-bold hover:gap-3 transition-all">
            LEER MÁS <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};