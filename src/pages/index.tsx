import Head from 'next/head';
import Image from 'next/image';
import Layout from '~/components/Layout';
import About from '~/sections/About';
import RecentPosts from '~/sections/RecentPosts';
import Contact from '~/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <About />
      <RecentPosts />
      <Contact />
    </Layout>
  );
}
