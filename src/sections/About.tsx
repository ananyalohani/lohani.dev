import React, { ReactElement } from 'react';
import Container from '~/components/Container';

export default function About(): ReactElement {
  return (
    <section id='about'>
      <Container headingSize='big' className='my-16'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <div className='flex flex-col space-y-6'>
            <h1 className='mb-2 text-3xl sm:text-4xl'>
              Hello there, I'm Ananya.
            </h1>
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
          <img
            src='/images/ananya.jpg'
            className='self-start w-56 mt-8 ml-5 rounded-full md:w-72 md:mt-0 md:self-auto'
            alt='Ananya Lohani'
          />
        </div>
      </Container>
    </section>
  );
}
