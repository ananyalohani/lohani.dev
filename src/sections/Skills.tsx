import React, { ReactElement } from 'react';
import Container from '~/components/Container';

export default function Skills(): ReactElement {
  return (
    <section id='my-skills'>
      <Container
        heading='My Skills'
        headingSize='small'
        className='mt-12 mb-16'
      >
        <div className='flex flex-col space-y-6'>
          <p>
            Through college courses and self-learning, I've built a solid
            foundation in computer science and web development. Here are some
            technologies I'm familiar with:
          </p>
          <ul className='grid grid-cols-4 gap-4 font-semibold list-disc list-inside text-sky-200'>
            <li>
              <span className='text-gray-800'>JavaScript</span>
            </li>
            <li>
              <span className='text-gray-800'>TypeScript</span>
            </li>
            <li>
              <span className='text-gray-800'>React</span>
            </li>
            <li>
              <span className='text-gray-800'>React Native</span>
            </li>
            <li>
              <span className='text-gray-800'>Express</span>
            </li>
            <li>
              <span className='text-gray-800'>Prisma</span>
            </li>
            <li>
              <span className='text-gray-800'>Svelte</span>
            </li>
            <li>
              <span className='text-gray-800'>HTML &amp; CSS</span>
            </li>
            <li>
              <span className='text-gray-800'>Python</span>
            </li>
            <li>
              <span className='text-gray-800'>Java</span>
            </li>
            <li>
              <span className='text-gray-800'>C++</span>
            </li>
            <li>
              <span className='text-gray-800'>C</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
