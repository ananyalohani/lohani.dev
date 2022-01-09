import React, { ReactElement } from 'react';
import Container from '~/components/Container';
import skills from '~/lib/data/skills';

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
          <ul className='grid grid-cols-2 gap-4 font-semibold list-disc list-inside sm:grid-cols-3 md:grid-cols-4 text-sky-300'>
            {skills.map((skill, key) => (
              <li key={key}>
                <span className='text-gray-800'>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
