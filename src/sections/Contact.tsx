import React, { ReactElement, useState } from 'react';
import Container from '~/components/Container';
import Button from '~/components/Button';
import socials from '~/lib/data/socials';
import Link from 'next/link';

export default function Contact(): ReactElement {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(fields);
    fetch('https://formspree.io/f/xwkwyvar', {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      setFields({ name: '', email: '', message: '' });
    });
  };

  return (
    <section id='contact'>
      <Container heading='Contact' headingSize='small' className='my-12'>
        <div className='flex flex-col space-y-4'>
          <p>
            If you like my{' '}
            <Link href='/projects'>
              <a>work</a>
            </Link>{' '}
            and are interested in working with me, you can reach me at{' '}
            <a href='mailto:work@lohani.dev'>work@lohani.dev</a>.
          </p>
          <p>You can also connect with me on the following platforms:</p>
          <div className='flex flex-wrap gap-3 md:gap-4'>
            {socials.map((social, key) => (
              <Button
                text={social.text}
                className=''
                Icon={social.icon}
                color={social.color}
                link={social.link}
                id={social.text === 'Polywork' ? 'polywork' : ''}
                key={key}
              />
            ))}
          </div>
          <div>
            <p>Alternately you can fill the contact form below:</p>
            <form
              onSubmit={submitForm}
              className='grid max-w-lg grid-cols-1 gap-4 mt-6'
            >
              <div>
                <label className='required' htmlFor='name'>
                  Name
                </label>
                <input
                  type='text'
                  className='input'
                  name='name'
                  value={fields.name}
                  required
                  onChange={(e: any) => {
                    setFields({ ...fields, name: e.target.value });
                  }}
                />
              </div>
              <div>
                <label className='required' htmlFor='email'>
                  Email
                </label>
                <input
                  type='text'
                  className='input'
                  name='email'
                  value={fields.email}
                  required
                  onChange={(e: any) => {
                    setFields({ ...fields, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <label className='required' htmlFor='message'>
                  Message
                </label>
                <textarea
                  className='input'
                  name='message'
                  value={fields.message}
                  required
                  onChange={(e: any) => {
                    setFields({ ...fields, message: e.target.value });
                  }}
                />
              </div>
              <Button text='Send' type='submit' className='w-min' />
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
