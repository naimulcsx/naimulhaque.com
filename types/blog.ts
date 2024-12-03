export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  description: string;
  coverImage: string;
}

export interface KeystaticPost {
  title: string;
  excerpt: string;
  publishedDate: string | null;
  featuredImage: string | null;
  tags: readonly string[];
  content: () => Promise<string>;
}
