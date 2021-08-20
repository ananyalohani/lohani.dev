import Head from 'next/head';
import Image from 'next/image';
import Layout from '~/layouts/Layout';
import About from '~/sections/About';
import RecentPosts from '~/sections/RecentPosts';
import Contact from '~/sections/Contact';
import { GetStaticProps } from 'next';
import { getAllPosts } from '~/lib/mdx';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = getAllPosts(); // your fetch function here

  return {
    props: { posts },
  };
};

export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <title>Ananya Lohani</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Ananya Lohani is a 3rd year undergrad student majoring in CSE at IIIT Delhi.'
        />
      </Head>
      <Layout>
        <About />
        <RecentPosts posts={posts} />
        <Contact />
      </Layout>
    </>
  );
}
