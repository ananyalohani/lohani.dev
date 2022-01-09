import React from 'react';
import Layout from '~/layouts/Layout';
import Container from '~/components/Container';
import ProjectCard from '~/components/ProjectCard';
import projects from '~/lib/data/projects';

export default function Projects() {
  return (
    <Layout title='Projects'>
      <section>
        <Container heading='Projects' className='my-16'>
          <div className='space-y-6'>
            {projects.map((project, key) => (
              <ProjectCard project={project} key={key} />
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
