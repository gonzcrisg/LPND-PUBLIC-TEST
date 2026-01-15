import React from 'react';
import { BlogPost } from '../types';
import { MessageSquare, Share2, PlayCircle } from 'lucide-react';

interface PostCardProps {
  post: BlogPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="glass-panel rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-brand-blue/20">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-blue/90 text-white text-xs font-bold uppercase tracking-wider rounded backdrop-blur-sm">
            {post.category}
          </span>
        </div>
        {post.hasVideo && (
           <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
             <PlayCircle className="w-12 h-12 text-white/90 drop-shadow-lg" />
           </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-medium">
          <span>{post.date}</span>
          <span>•</span>
          <span className="text-brand-accent">{post.author}</span>
        </div>

        <h3 className="text-xl font-display font-bold text-white mb-3 leading-snug group-hover:text-brand-accent transition-colors">
          {post.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
          {post.excerpt}
        </p>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-slate-400 text-sm">
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span>{post.commentsCount}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};