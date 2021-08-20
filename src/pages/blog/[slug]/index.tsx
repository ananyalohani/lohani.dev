import React, { ReactElement } from 'react';
import PostLayout from '~/layouts/PostLayout';
import { getAllPosts, getSinglePost } from '~/lib/mdx';
import { PostMeta } from '~/types/blog';
import { NextSeo } from 'next-seo';
import Modal from '~/components/Modal';

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

export default function BlogPost({
  code,
  frontmatter,
  slug,
  url,
}: PostMeta): ReactElement {
  return (
    <>
      <NextSeo
        title={`${frontmatter.title} • Ananya Lohani`}
        description={frontmatter.description}
        canonical={`${url}/blog/${slug}`}
        openGraph={{
          type: 'website',
          url: `${url}/blog/${slug}`,
          title: `${frontmatter.title} • Ananya Lohani`,
          description: frontmatter.description,
          images: [
            {
              url: `${url}${frontmatter.image}`,
              alt: frontmatter.title,
            },
          ],
          site_name: 'Ananya Lohani',
        }}
        twitter={{
          handle: '@ananyalohani_',
          cardType: 'summary_large_image',
        }}
      />
      <PostLayout
        title={frontmatter.title}
        slug={slug}
        publishedAt={frontmatter.publishedAt}
        image={frontmatter.image}
        code={code}
      />
    </>
  );
}
