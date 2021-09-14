import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import Container from '~/components/Container';
import navigation from '~/lib/data/navigation';

export default function Header(): ReactElement {
  const router = useRouter();
  const isBlog = router.asPath.includes('/blog/');
  const backgroundStyles = isBlog
    ? {
        backgroundImage:
          'linear-gradient(rgba(186, 230, 253) 10%, transparent), url(/images/blog-background.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
    : {};

  return (
    <header
      css={[
        tw`border-b bg-sky-200 bg-opacity-70 border-sky-300`,
        isBlog
          ? tw`absolute top-0 left-0 right-0 z-0 text-sky-300`
          : tw`sticky top-0 z-10 backdrop-filter backdrop-blur-lg`,
      ]}
      style={{
        height: isBlog ? '60vh' : 'auto',
        ...backgroundStyles,
      }}
    >
      <Container className='flex flex-row items-center justify-between py-5'>
        <h1 className='text-xl sm:text-2xl'>
          <Link href='/'>
            <a className='alt-link'>Ananya Lohani</a>
          </Link>
        </h1>
        <nav className='flex flex-row space-x-3 text-base font-normal sm:text-lg sm:space-x-5'>
          {navigation.map((nav, key) => (
            <h2
              className='text-gray-700 transition-all ease-out hover:text-sky-500'
              css={[router.asPath === nav.path && tw`text-sky-700`]}
              key={key}
            >
              <Link href={nav.path}>
                <a className='btn-link'>{nav.title}</a>
              </Link>
            </h2>
          ))}
        </nav>
      </Container>
    </header>
  );
}
