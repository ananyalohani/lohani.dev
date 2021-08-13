import React, { ReactElement } from 'react';
import Container from '~/components/Container';
import PostCard from '~/components/PostCard';

export default function RecentPosts(): ReactElement {
  return (
    <section id='recent-posts'>
      <Container heading='Recent Posts' size='small' className='my-12'>
        <div className='flex flex-row space-x-3'>
          <PostCard
            heading='How I built my site with Next.js'
            blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus magna sed ex mattis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus...'
          />
          <PostCard
            heading='How I built my site with Next.js'
            blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus magna sed ex mattis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus...'
          />
          <PostCard
            heading='How I built my site with Next.js'
            blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus magna sed ex mattis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus...'
          />
        </div>
      </Container>
    </section>
  );
}
