import React, { ReactElement } from 'react';
import Container from '~/components/Container';
import Button from '~/components/Button';
import socials from '~/lib/socials';

export default function Contact(): ReactElement {
  return (
    <section id='contact'>
      <Container heading='Contact' size='small' className='my-12'>
        <div>
          <p>
            If you like my work and are interested in working with me, you can
            reach me at <a href='work@lohani.dev'>work@lohani.dev</a>.
          </p>
          <br />
          <p>You can also connect with me on the following platforms:</p>
          <div className='flex flex-wrap mt-3'>
            {socials.map((social) => (
              <Button
                text={social.text}
                className='mt-3 mr-6'
                Icon={social.icon}
                color={social.color}
                link={social.link}
                id={social.text === 'Polywork' ? 'polywork' : ''}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
