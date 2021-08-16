import React, { ReactElement } from 'react';
import Layout from '~/components/Layout';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '~/lib/mdx';
import Container from '~/components/Container';

export const getStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }: any) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

interface Props {}

export default function BlogPost({ code, frontmatter }: any): ReactElement {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Container heading={frontmatter.title} size='small'>
        <Component />
      </Container>
    </Layout>
  );
}
