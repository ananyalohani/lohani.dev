import React, { ReactElement } from 'react';
import Container from '~/components/Container';
import PostCard from '~/components/PostCard';

export default function RecentPosts({ posts }: any): ReactElement {
  return (
    <section id='recent-posts'>
      <Container heading='Recent Posts' headingSize='small' className='my-12'>
        <div className='flex flex-row space-x-3'>
          {posts.map((post: any, key: any) => (
            <PostCard
              heading={post.frontmatter.title}
              blurb={post.frontmatter.description}
              key={key}
              link={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
