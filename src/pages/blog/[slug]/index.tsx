import React, { ReactElement, useState } from 'react';
import Modal from '~/components/Modal';
import PostLayout from '~/layouts/PostLayout';
import { getAllPosts, getSinglePost } from '~/lib/mdx';
import ShareButtons from '~/sections/ShareButtons';
import { Post } from '~/types/blog';

export const getStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      ...post,
      slug: params.slug,
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }: any) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default function BlogPost(meta: Post): ReactElement {
  const [open, setOpen] = useState<Boolean>(false);

  const onModalClose = () => {
    setOpen(false);
  };

  const onModalOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <PostLayout meta={meta} setModalOpen={setOpen} />
      {open && (
        <Modal
          open={open}
          className='flex flex-col items-center w-2/5 space-y-4'
          setOpen={setOpen}
          onClose={onModalClose}
          onOpen={onModalOpen}
        >
          <h1 className='w-full pb-2 text-3xl text-center text-gray-800 border-b border-gray-300'>
            Share this Post!
          </h1>
          <p className='pb-4 text-lg text-gray-800'>
            Share this blog post to any of the following platforms:
          </p>
          <ShareButtons url={meta.url!} />
        </Modal>
      )}
    </>
  );
}
