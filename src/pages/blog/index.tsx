import React, { useEffect } from 'react';
import Layout from '~/layouts/Layout';
import { getAllPosts } from '~/lib/mdx';
import Link from 'next/link';

import { GetStaticProps } from 'next';
import Container from '~/components/Container';
import PostCard from '~/components/PostCard';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = getAllPosts(); // your fetch function here

  return {
    props: { posts },
  };
};

export default function Blog({ posts }: any) {
  return (
    <>
      <Head>
        <title>Ananya Lohani • Blog</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Ananya Lohani is a 3rd year undergrad student majoring in CSE at IIIT Delhi.'
        />
      </Head>
      <Layout>
        <section>
          <Container heading='Blog' className='my-16'>
            {posts.map((post: any, key: any) => (
              <PostCard
                heading={post.frontmatter.title}
                blurb={post.frontmatter.description}
                key={key}
                link={`blog/${post.slug}`}
                image={post.frontmatter.image}
              />
            ))}
          </Container>
        </section>
      </Layout>
    </>
  );
}
