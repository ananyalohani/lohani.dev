import React, { ReactElement } from 'react';
import Container from '~/components/Container';

export default function About(): ReactElement {
  return (
    <section id='about'>
      <Container size='big' className='my-16'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col space-y-4'>
            <h1 className='mb-2 text-4xl'>Hello there, I'm Ananya.</h1>
            <p>
              I am a 3rd year undergrad student majoring in Computer Science and
              Engineering at{' '}
              <a href='https://iiitd.ac.in'>
                Indraprastha Institute of Information Technology, Delhi
              </a>
              .
            </p>
            <p>
              I love making fast, aesthetically pleasing websites. I’m
              constantly learning new things!
            </p>
            <p>
              Welcome to my little space on the internet where I document my
              journey of learning new technologies and finding my place in the
              tech world.
            </p>
            <p>
              When I’m not coding, I paint. Check out my artworks on{' '}
              <a href='https://instagram.com/lohani_art'>my art account</a>.
            </p>
          </div>
          <img src='/images/ananya.jpg' className='ml-5 rounded-full w-72' />
        </div>
      </Container>
    </section>
  );
}
