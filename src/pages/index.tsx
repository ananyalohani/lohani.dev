import { GetStaticProps } from 'next';
import Layout from '~/layouts/Layout';
import { getAllPosts } from '~/lib/mdx';
import About from '~/sections/About';
import Contact from '~/sections/Contact';
import RecentPosts from '~/sections/RecentPosts';
import RecentProjects from '~/sections/RecentProjects';
import Skills from '~/sections/Skills';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = getAllPosts(); // your fetch function here

  return {
    props: { posts: posts.slice(0, 2) },
  };
};

export default function Home({ posts }: any) {
  return (
    <Layout>
      <About />
      <RecentPosts posts={posts} />
      <RecentProjects />
      <Skills />
      <Contact />
    </Layout>
  );
}
