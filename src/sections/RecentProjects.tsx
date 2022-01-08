import React, { ReactElement } from 'react';
import Button from '~/components/Button';
import Container from '~/components/Container';
import ProjectCard from '~/components/ProjectCard';
import Link from 'next/link';
import { Project } from '~/lib/data/projects';
import projects from '~/lib/data/projects';

export default function RecentProjects(): ReactElement {
  return (
    <section id='recent-projects'>
      <Container
        heading='Recent Projects'
        headingSize='small'
        className='mt-12 mb-6'
      >
        <div className='flex flex-col space-y-6'>
          <p>
            I like building projects to learn new technologies. Here are some of
            them!
          </p>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            {projects.slice(0, 2).map((project: Project, key: number) => (
              <ProjectCard project={project} key={key} size='small' />
            ))}
          </div>
          <Link href='/projects'>
            <a className='self-end btn-link'>
              <Button text='View All' />
            </a>
          </Link>
        </div>
      </Container>
    </section>
  );
}
