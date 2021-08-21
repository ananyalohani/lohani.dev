import React, { useEffect } from 'react';
import Layout from '~/layouts/Layout';
import { getAllPosts } from '~/lib/mdx';
import { GetStaticProps } from 'next';
import Container from '~/components/Container';
import PostCard from '~/components/PostCard';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = getAllPosts(); // your fetch function here

  return {
    props: { posts },
  };
};

export default function Blog({ posts }: any) {
  return (
    <Layout title='Ananya Lohani • Blog'>
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
  );
}
