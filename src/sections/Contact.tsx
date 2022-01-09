import Link from 'next/link';
import React, { ReactElement } from 'react';
import Button from '~/components/Button';
import Container from '~/components/Container';
import socials from '~/lib/data/socials';

export default function Contact(): ReactElement {
  return (
    <section id='contact'>
      <Container heading='Contact' headingSize='small' className='my-12'>
        <div>
          <div className='mb-8 space-y-3 '>
            <p>
              If you like my{' '}
              <Link href='/projects'>
                <a>work</a>
              </Link>{' '}
              and are interested in working with me, you can reach me at{' '}
              <a href='mailto:work@lohani.dev'>work@lohani.dev</a>.
            </p>
            <p>You can also connect with me on the following platforms:</p>
            <div className='flex flex-wrap gap-3'>
              {socials.map((social, key) => (
                <Button
                  className='flex flex-row'
                  color={social.color}
                  link={social.link}
                  id={social.text === 'Polywork' ? 'polywork' : ''}
                  key={key}
                >
                  <social.icon className='w-5 h-5' />
                  <span className=''>{social.text}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
