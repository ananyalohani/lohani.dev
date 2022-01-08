import React, { ReactElement } from 'react';
import Button from '~/components/Button';
import Container from '~/components/Container';
import PostCard from '~/components/PostCard';
import Link from 'next/link';
import { Post } from '~/types/blog';

export default function RecentPosts({ posts }: any): ReactElement {
  return (
    <section id='recent-posts'>
      <Container heading='Recent Posts' headingSize='small' className='my-12'>
        <div className='flex flex-col space-y-6'>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            {posts.map((post: Post, key: number) => (
              <PostCard
                heading={post.frontmatter.title}
                blurb={post.frontmatter.description}
                key={key}
                link={`blog/${post.slug}`}
                image={post.frontmatter.image!}
              />
            ))}
          </div>
          <Link href='/blog'>
            <a className='self-end btn-link'>
              <Button text='View All' />
            </a>
          </Link>
        </div>
      </Container>
    </section>
  );
}
