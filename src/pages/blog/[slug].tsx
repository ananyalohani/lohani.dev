import React, { ReactElement } from 'react';
import Layout from '~/components/Layout';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '~/lib/mdx';
import Container from '~/components/Container';
import { format } from 'date-fns';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { IconType } from 'react-icons/lib';

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
  const dateArr = frontmatter.publishedAt
    .split('-')
    .map((i: string) => parseInt(i));
  const date = format(
    new Date(dateArr[0], dateArr[1] - 1, dateArr[2]),
    'do LLLL, yyyy'
  );

  const ShareIcon = ({ Icon }: { Icon: IconType }) => (
    <Icon className='w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700' />
  );

  return (
    <Layout>
      <section className='relative -top-56'>
        <Container size='big' className='px-20 py-16 bg-white rounded-2xl'>
          <article className='mx-auto my-0 prose max-w-none'>
            <h1 style={{ marginBottom: '0' }}>{frontmatter.title}</h1>
            <div className='flex flex-row justify-between w-full'>
              <div className='flex flex-row items-center space-x-2'>
                <img
                  src='/images/ananya.jpg'
                  className='w-8 rounded-full'
                  style={{ margin: '1.2rem 0' }}
                />
                <p className='text-sm text-gray-600'>Ananya Lohani</p>
                <p className='text-sm font-bold text-gray-600'>·</p>
                <p className='text-sm text-gray-600'>{date}</p>
              </div>
              <div className='flex flex-row items-center space-x-3'>
                <ShareIcon Icon={FaTwitter} />
                <ShareIcon Icon={FaLinkedin} />
                <ShareIcon Icon={BiLink} />
              </div>
            </div>
            <hr style={{ marginTop: 0 }} />
            <img
              src={frontmatter.image}
              className='mx-auto shadow-xl rounded-xl'
            />
            <Component />
          </article>
        </Container>
      </section>
    </Layout>
  );
}
