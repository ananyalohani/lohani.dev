import React from 'react';
import Layout from '~/layouts/Layout';
import Container from '~/components/Container';
import ProjectCard from '~/components/ProjectCard';

export default function Projects() {
  return (
    <Layout title='Projects'>
      <section>
        <Container heading='Projects' className='my-16'>
          <ProjectCard
            title='Teams'
            description='Awarded the opportunity to attend exclusive webinars and AMA sessions by Microsoft. Designed, constructed and deployed a fully-featured video calling platform.'
            mainLink='https://msft.lohani.dev'
            image='/images/blog/msft-teams-homepage.png'
            links={[
              { type: 'website', link: 'https://msft.lohani.dev' },
              { type: 'github', link: 'https://github.com/ananyalohani/teams' },
              { type: 'youtube', link: 'https://youtube.com' },
            ]}
            tags={[
              'Next.js',
              'React',
              'TailwindCSS',
              'MongoDB',
              'Express',
              'NodeJS',
            ]}
          />
        </Container>
      </section>
    </Layout>
  );
}
