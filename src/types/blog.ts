export interface Post {
  code?: string;
  slug: string;
  frontmatter: Frontmatter;
  url?: string;
}

export interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  image?: string;
}
