import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import { Frontmatter, Post } from '~/types/blog';

export const POSTS_PATH = path.join(process.cwd(), 'src/posts');

export const getSourceOfFile = (fileName: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName));
};

export const getAllPosts = () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));
  return paths
    .map((fileName): Post => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, '');
      const data = matter(source).data as Frontmatter;

      return {
        frontmatter: data,
        slug: slug,
      };
    })
    .sort(
      (a, b) =>
        Number(new Date(b.frontmatter.publishedAt)) -
        Number(new Date(a.frontmatter.publishedAt))
    );
};

export const getSinglePost = async (slug: string) => {
  const source = getSourceOfFile(slug + '.mdx');

  // @ts-ignore
  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
  });

  return {
    frontmatter,
    code,
  };
};
