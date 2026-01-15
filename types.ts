export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  commentsCount: number;
  category: string;
  imageUrl: string;
  hasVideo?: boolean;
}

export interface SidebarItem {
  id: string;
  title: string;
  url: string;
}

export enum ViewMode {
  GRID = 'GRID',
  LIST = 'LIST'
}