import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import Container from '~/components/Container';
import navigation from '~/lib/navigation';

export default function Header(): ReactElement {
  const router = useRouter();

  return (
    <header className='sticky top-0 z-10 border-b bg-sky-200 bg-opacity-70 backdrop-filter backdrop-blur-lg border-sky-300'>
      <Container className='flex flex-row items-center justify-between py-5'>
        <h1 className='text-3xl'>
          <Link href='/'>
            <a className='btn-link'>Ananya Lohani</a>
          </Link>
        </h1>
        <div className='flex flex-row space-x-3 text-lg font-medium '>
          {navigation.map((nav, key) => (
            <h2
              className='text-gray-700'
              css={[router.asPath === nav.path && tw`font-bold`]}
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
