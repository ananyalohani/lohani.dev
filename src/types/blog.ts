export interface PostMeta {
  slug: string;
  frontmatter: FrontMatter;
}

export interface FrontMatter {
  title: String;
  description: String;
  publishedAt: Date;
  category: String;
  image?: string;
}
