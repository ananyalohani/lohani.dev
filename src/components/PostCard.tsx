import React from 'react';
import Link from 'next/link';

interface Props {
  heading: string;
  blurb: String;
  link: string;
  image: string;
}

export default function PostCard({ heading, blurb, link, image }: Props) {
  return (
    <div
      className='transition-all rounded-md cursor-pointer group'
      style={{ maxWidth: '50%' }}
    >
      <Link href={link}>
        <a className='space-y-5 btn-link'>
          <img src={image} className='rounded-lg' alt={heading} />
          <div className='space-y-2'>
            <h2 className='text-xl leading-6 transition-all group-hover:text-sky-400'>
              {heading}
            </h2>
            <p className='text-gray-700 truncate transition-all overflow-ellipsis'>
              {blurb}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
