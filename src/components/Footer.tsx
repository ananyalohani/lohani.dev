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
      className='text-gray-700 transition-all ease-in-out btn-link hover:text-gray-800'
      rel='noopener'
    >
      {children}
    </a>
  );

  return (
    <footer className='border-t bg-sky-200 border-sky-300 bg-opacity-70'>
      <Container className='flex flex-row items-center justify-between py-5 text-sm text-gray-700 sm:text-base'>
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
