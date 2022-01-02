import React, { ReactElement } from 'react';
import Container from '~/components/Container';
import PostCard from '~/components/PostCard';

export default function RecentPosts({ posts }: any): ReactElement {
  return (
    <section id='recent-posts'>
      <Container heading='Recent Posts' headingSize='small' className='my-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {posts.map((post: any, key: any) => (
            <PostCard
              heading={post.frontmatter.title}
              blurb={post.frontmatter.description}
              key={key}
              link={`blog/${post.slug}`}
              image={post.frontmatter.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
