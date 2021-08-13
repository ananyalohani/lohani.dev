import React, { ReactElement } from 'react';
import Container from '~/components/Container';

interface Props {
  active?: 'about' | 'work' | 'projects' | 'blog';
}

export default function Header({ active }: Props): ReactElement {
  return (
    <header className='sticky top-0 z-10 border-b bg-sky-200 bg-opacity-70 backdrop-filter backdrop-blur-lg border-sky-300'>
      <Container className='flex flex-row items-center justify-between py-5'>
        <h1 className='text-3xl'>Ananya Lohani</h1>
        <div className='flex flex-row space-x-3 text-xl'>
          <h2>About</h2>
          <h2>Work</h2>
          <h2>Projects</h2>
          <h2>Blog</h2>
        </div>
      </Container>
    </header>
  );
}
