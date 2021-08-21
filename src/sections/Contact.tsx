import React, { ReactElement } from 'react';
import Container from '~/components/Container';
import Button from '~/components/Button';
import socials from '~/lib/data/socials';

export default function Contact(): ReactElement {
  return (
    <section id='contact'>
      <Container heading='Contact' headingSize='small' className='my-12'>
        <div>
          <p>
            If you like my work and are interested in working with me, you can
            reach me at <a href='work@lohani.dev'>work@lohani.dev</a>.
          </p>
          <br />
          <p>You can also connect with me on the following platforms:</p>
          <div className='flex flex-wrap gap-3 mt-3 md:gap-4'>
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
        </div>
      </Container>
    </section>
  );
}
