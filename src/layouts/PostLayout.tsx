import { format, formatISO } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { BiLink } from 'react-icons/bi';
import { IoShareSocial } from 'react-icons/io5';
import Container from '~/components/Container';
import DecorativeRule from '~/components/DecorativeRule';
import SocialIcon from '~/components/SocialIcon';
import Layout from '~/layouts/Layout';
import { Post } from '~/types/blog';
import ButtonTooltip from '~/components/ButtonTooltip';

interface Props {
  meta: Post;
  setModalOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function PostLayout({
  meta,
  setModalOpen,
}: Props): ReactElement {
  const { code, slug, frontmatter, url } = meta;
  const Component = React.useMemo(() => getMDXComponent(code!), [code]);

  const dateArr = frontmatter.publishedAt
    .split('-')
    .map((i: string) => parseInt(i));

  const date = format(
    new Date(dateArr[0], dateArr[1] - 1, dateArr[2]),
    'do LLLL, yyyy'
  );
  const dateISO = formatISO(new Date(dateArr[0], dateArr[1] - 1, dateArr[2]));

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
            className='p-8 bg-white sm:p-12 lg:p-14 rounded-2xl w-full sm:w-11/12'
          >
            <h1 className='mb-0 text-3xl font-extrabold tracking-wide text-gray-800 md:text-3xl'>
              {frontmatter.title}
            </h1>
            <header className='flex flex-row justify-between w-full'>
              <div className='flex flex-row items-center space-x-1 sm:space-x-2'>
                <img
                  src='/images/ananya.jpg'
                  alt='Ananya Lohani'
                  className='w-8 my-5 mr-2.5 rounded-full'
                />
                <div className='text-xs text-gray-600 sm:text-sm'>
                  Ananya Lohani
                </div>
                <div className='text-xs font-bold text-gray-600 sm:text-sm'>
                  ·
                </div>
                <time
                  className='text-xs text-gray-600 sm:text-sm'
                  dateTime={dateISO}
                >
                  {date}
                </time>
              </div>
              <div className='flex flex-row items-center spzce-x-2 sm:space-x-3'>
                <ButtonTooltip label='Copy link'>
                  <SocialIcon Icon={BiLink} onClick={copyURL} />
                </ButtonTooltip>
                <ButtonTooltip label='Share to social media'>
                  <SocialIcon
                    Icon={IoShareSocial}
                    onClick={() => setModalOpen(true)}
                  />
                </ButtonTooltip>
              </div>
            </header>
            <hr className='mb-12' />
            <article className='mx-auto my-0 prose max-w-none'>
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
