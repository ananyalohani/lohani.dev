import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { BiLink } from 'react-icons/bi';
import { IoShareSocial } from 'react-icons/io5';
import Container from '~/components/Container';
import DecorativeRule from '~/components/DecorativeRule';
import SocialIcon from '~/components/SocialIcon';
import Layout from '~/layouts/Layout';

interface Props {
  title: String;
  slug: String;
  image: string;
  publishedAt: String;
  code: string;
  fixed?: boolean;
  url: string;
}

export default function BlogPost({
  title,
  slug,
  image,
  publishedAt,
  code,
  fixed = false,
  url,
}: Props): ReactElement {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const dateArr = publishedAt.split('-').map((i: string) => parseInt(i));

  const date = format(
    new Date(dateArr[0], dateArr[1] - 1, dateArr[2]),
    'do LLLL, yyyy'
  );

  const copyURL = () => {
    navigator.clipboard.writeText(`${url}/blog/${slug}`);
  };

  return (
    <Layout className={fixed ? 'h-screen overflow-y-hidden' : ''}>
      <section className='z-10 mt-40 transform translate-z-0'>
        <Container size='big' className='px-20 py-16 bg-white rounded-2xl'>
          <article className='mx-auto my-0 prose max-w-none'>
            <h1 style={{ marginBottom: '0' }}>{title}</h1>
            <div className='flex flex-row justify-between w-full'>
              <div className='flex flex-row items-center space-x-2'>
                <img src='/images/ananya.jpg' id='avatar' />
                <p className='text-sm text-gray-600'>Ananya Lohani</p>
                <p className='text-sm font-bold text-gray-600'>·</p>
                <p className='text-sm text-gray-600'>{date}</p>
              </div>
              <div className='flex flex-row items-center space-x-3'>
                <SocialIcon Icon={BiLink} onClick={copyURL} />
                <Link href={`/blog/${slug}/share`}>
                  <a className='btn-link'>
                    <SocialIcon Icon={IoShareSocial} />
                  </a>
                </Link>
              </div>
            </div>
            <hr style={{ marginTop: 0 }} />
            <img src={image} id='main-img' />
            <Component />
            <DecorativeRule />
          </article>
        </Container>
      </section>
    </Layout>
  );
}
