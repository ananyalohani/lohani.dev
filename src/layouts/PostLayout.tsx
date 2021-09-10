import React, { ReactElement } from 'react';
import Layout from '~/layouts/Layout';
import Container from '~/components/Container';
import SocialIcon from '~/components/SocialIcon';
import { getMDXComponent } from 'mdx-bundler/client';
import { format } from 'date-fns';
import DecorativeRule from '~/components/DecorativeRule';
import { BiLink } from 'react-icons/bi';
import { IoShareSocial } from 'react-icons/io5';
import { PostMeta } from '~/types/blog';
import { NextSeo } from 'next-seo';

interface Props {
  meta: PostMeta;
  setModalOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function PostLayout({
  meta,
  setModalOpen,
}: Props): ReactElement {
  const { code, slug, frontmatter, url } = meta;
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const dateArr = frontmatter.publishedAt
    .split('-')
    .map((i: string) => parseInt(i));

  const date = format(
    new Date(dateArr[0], dateArr[1] - 1, dateArr[2]),
    'do LLLL, yyyy'
  );

  const copyURL = () => {
    navigator.clipboard.writeText(`${url}/blog/${slug}`);
  };

  return (
    <>
      <NextSeo
        titleTemplate='%s • Ananya Lohani'
        title={frontmatter.title}
        description={frontmatter.description}
        canonical={`${url}/blog/${slug}`}
        openGraph={{
          type: 'website',
          url: `${url}/blog/${slug}`,
          title: `${frontmatter.title} • Ananya Lohani`,
          description: frontmatter.description,
          images: [
            {
              url: `${url}${frontmatter.image}`,
              alt: frontmatter.title,
            },
          ],
          site_name: 'Ananya Lohani',
        }}
        twitter={{
          handle: '@ananyalohani_',
          cardType: 'summary_large_image',
        }}
      />

      <Layout title={frontmatter.title} description={frontmatter.description}>
        <section className='z-10 mt-40 transform translate-z-0'>
          <Container
            size='big'
            className='px-6 py-8 bg-white sm:px-12 sm:py-16 lg:px-20 lg:py-16 rounded-2xl'
          >
            <article className='mx-auto my-0 prose max-w-none'>
              <h1 style={{ marginBottom: '0' }}>{frontmatter.title}</h1>
              <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-row items-center space-x-1 sm:space-x-2'>
                  <img
                    src='/images/ananya.jpg'
                    id='avatar'
                    alt='Ananya Lohani'
                  />
                  <div className='text-xs text-gray-600 sm:text-sm'>
                    Ananya Lohani
                  </div>
                  <div className='text-xs font-bold text-gray-600 sm:text-sm'>
                    ·
                  </div>
                  <div className='text-xs text-gray-600 sm:text-sm'>{date}</div>
                </div>
                <div className='flex flex-row items-center spzce-x-2 sm:space-x-3'>
                  <SocialIcon Icon={BiLink} onClick={copyURL} />
                  <SocialIcon
                    Icon={IoShareSocial}
                    onClick={() => setModalOpen(true)}
                  />
                </div>
              </div>
              <hr style={{ marginTop: 0 }} />
              <img
                src={frontmatter.image}
                id='main-img'
                alt={frontmatter.title}
              />
              <Component />
              <DecorativeRule />
            </article>
          </Container>
        </section>
      </Layout>
    </>
  );
}
