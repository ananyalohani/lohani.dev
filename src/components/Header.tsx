import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import Container from '~/components/Container';
import navigation from '~/lib/data/navigation';

export default function Header(): ReactElement {
  const router = useRouter();

  return (
    <header
      css={[
        tw`border-b bg-sky-200 bg-opacity-70`,
        router.asPath.includes('/blog/')
          ? tw`absolute top-0 left-0 right-0 z-0 border-sky-200`
          : tw`sticky top-0 z-10 backdrop-filter backdrop-blur-lg border-sky-300`,
      ]}
      style={{ height: router.asPath.includes('/blog/') ? '60vh' : 'auto' }}
    >
      <Container className='flex flex-row items-center justify-between py-5'>
        <h1 className='text-2xl'>
          <Link href='/'>
            <a className='btn-link'>Ananya Lohani</a>
          </Link>
        </h1>
        <div className='flex flex-row space-x-5 text-lg font-normal'>
          {navigation.map((nav, key) => (
            <h2
              className='text-gray-700 transition-all ease-out hover:text-sky-500'
              css={[router.asPath === nav.path && tw`text-sky-600`]}
              key={key}
            >
              <Link href={nav.path}>
                <a className='btn-link'>{nav.title}</a>
              </Link>
            </h2>
          ))}
        </div>
      </Container>
    </header>
  );
}
