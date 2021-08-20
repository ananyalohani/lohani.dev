export interface PostMeta {
  code: string;
  slug: string;
  url?: string;
  frontmatter: {
    [key: string]: any;
  };
}
