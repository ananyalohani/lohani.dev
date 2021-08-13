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
        <div className='flex flex-row space-x-3 text-lg font-semibold '>
          <p className='text-gray-700'>About</p>
          <p className='text-gray-700'>Work</p>
          <p className='text-gray-700'>Projects</p>
          <p className='text-gray-700'>Blog</p>
        </div>
      </Container>
    </header>
  );
}
