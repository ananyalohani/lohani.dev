import React from 'react';
import Link from 'next/link';

interface Props {
  heading: string;
  blurb: string;
  link: string;
  image: string;
}

export default function PostCard({ heading, blurb, link, image }: Props) {
  return (
    <div className='transition-all cursor-pointer group bg-gray-50 p-4 border-2 border-gray-200 rounded-lg w-full hover:bg-sky-50 hover:border-sky-200'>
      <Link href={link}>
        <a className='space-y-5 btn-link'>
          <img src={image} className='' alt={heading} />
          <div className='space-y-2'>
            <h2 className='text-lg leading-6 transition-all md:text-lg group-hover:text-sky-500'>
              {heading}
            </h2>
            <p className='text-sm text-gray-700 truncate transition-all md:text-base overflow-ellipsis group-hover:text-sky-900'>
              {blurb}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
