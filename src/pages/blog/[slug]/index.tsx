import React, { ReactElement } from 'react';
import PostLayout from '~/layouts/PostLayout';
import { getAllPosts, getSinglePost } from '~/lib/mdx';
import { PostMeta } from '~/types/blog';

export const getStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post, slug: params.slug, url: process.env.SITE_URL },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }: any) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default function BlogPost(meta: PostMeta): ReactElement {
  return <PostLayout meta={meta} />;
}
