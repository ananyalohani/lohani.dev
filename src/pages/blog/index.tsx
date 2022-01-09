import React, { useEffect } from 'react';
import Layout from '~/layouts/Layout';
import { getAllPosts } from '~/lib/mdx';
import { GetStaticProps } from 'next';
import Container from '~/components/Container';
import PostCard from '~/components/PostCard';
import { Post } from '~/types/blog';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = getAllPosts(); // your fetch function here

  return {
    props: { posts },
  };
};

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <Layout title='Blog'>
      <section>
        <Container heading='Blog' className='my-16'>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            {posts.map((post, key) => (
              <PostCard
                heading={post.frontmatter.title}
                blurb={post.frontmatter.description}
                key={key}
                link={`blog/${post.slug}`}
                image={post.frontmatter.image!}
              />
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
