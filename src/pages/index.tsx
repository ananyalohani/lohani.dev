import Layout from '~/layouts/Layout';
import About from '~/sections/About';
import RecentPosts from '~/sections/RecentPosts';
import Contact from '~/sections/Contact';
import { GetStaticProps } from 'next';
import { getAllPosts } from '~/lib/mdx';
import projects from '~/lib/data/projects';
import RecentProjects from '~/sections/RecentProjects';

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
      <RecentProjects projects={projects.slice(0, 2)} />
      <Contact />
    </Layout>
  );
}
