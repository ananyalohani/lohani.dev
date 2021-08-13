import React, { ReactElement } from 'react';
import Container from '~/components/Container';

export default function Footer(): ReactElement {
  const Link = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      target='_blank'
      className='text-gray-700 transition-all ease-in-out btn-link hover:text-gray-800 hover:border-b hover:border-gray-800'
    >
      {children}
    </a>
  );

  return (
    <footer className='border-t bg-sky-200 border-sky-300 bg-opacity-70'>
      <Container className='flex flex-row items-center justify-between py-5 text-gray-700'>
        <div>
          Built with{' '}
          <Link href='https://nextjs.org'>
            <strong>Next.js</strong>
          </Link>{' '}
          and{' '}
          <Link href='https://tailwindcss.com'>
            <strong>Tailwind</strong>
          </Link>
        </div>
        <div>&copy; Ananya Lohani 2021</div>
      </Container>
    </footer>
  );
}
