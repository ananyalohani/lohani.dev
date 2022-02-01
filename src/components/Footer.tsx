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
    <a href={href} target='_blank' className='alt-link' rel='noopener'>
      {children}
    </a>
  );

  return (
    <footer className='border-t bg-sky-200 border-sky-300 bg-opacity-70'>
      <Container className='flex flex-row items-center justify-between py-5 text-sm text-gray-700 sm:text-base'>
        <div>
          Built with <Link href='https://nextjs.org'>Next.js</Link> and{' '}
          <Link href='https://tailwindcss.com'>Tailwind</Link>
        </div>
        <div>&copy; Ananya Lohani 2021 &ndash; Present</div>
      </Container>
    </footer>
  );
}
