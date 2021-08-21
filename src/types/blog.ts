export interface PostMeta {
  code: string;
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
  url: string;
}
