import Layout from '~/components/Layout';
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
    <Layout title='Ananya Lohani'>
      <About />
      <RecentPosts posts={posts} />
      <Contact />
    </Layout>
  );
}
