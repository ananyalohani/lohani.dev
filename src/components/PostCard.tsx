import React from 'react';
import Link from 'next/link';

interface Props {
  heading: String;
  blurb: String;
  link: string;
  image?: string;
}

export default function PostCard({ heading, blurb, link, image }: Props) {
  return (
    <div className='max-w-xs p-4 transition-all border-2 border-gray-300 rounded-md cursor-pointer bg-gray-50 group hover:bg-sky-100 hover:border-sky-200'>
      <Link href={link}>
        <a className='btn-link'>
          {image && <img src={image} className='mb-3 rounded' />}
          <h3 className='mb-2 text-lg leading-6 transition-all group-hover:text-sky-400'>
            {heading}
          </h3>
          <p className='text-sm text-gray-700 transition-all group-hover:text-sky-900'>
            {blurb}
          </p>
        </a>
      </Link>
    </div>
  );
}
