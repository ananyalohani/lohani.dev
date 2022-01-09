import React, { ReactElement } from 'react';
import Button from '~/components/Button';
import Container from '~/components/Container';
import PostCard from '~/components/PostCard';
import Link from 'next/link';
import { Post } from '~/types/blog';

interface Props {
  posts: Post[];
}

export default function RecentPosts({ posts }: Props): ReactElement {
  return (
    <section id='recent-posts'>
      <Container
        heading='Recent Posts'
        headingSize='small'
        className='mt-12 mb-6'
      >
        <div className='flex flex-col space-y-6'>
          <p>
            I write about my experience building projects and exploring new
            technologies.
          </p>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            {posts.map((post, key) => (
              <PostCard
                heading={post.frontmatter.title}
                blurb={post.frontmatter.description}
                key={key}
                link={`/blog/${post.slug}`}
                image={post.frontmatter.image!}
              />
            ))}
          </div>
          <Button className='self-end' link='/blog'>
            View All
          </Button>
        </div>
      </Container>
    </section>
  );
}
