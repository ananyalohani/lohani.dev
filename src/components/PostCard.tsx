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
    <div className='transition-all cursor-pointer group bg-slate-50 p-4 border-2 border-slate-200 rounded-lg w-full hover:bg-sky-50 hover:border-sky-200'>
      <Link href={link}>
        <a className='space-y-5 btn-link'>
          <img src={image} className='rounded' alt={heading} />
          <div className='space-y-2'>
            <h2 className='text-lg leading-6 transition-all md:text-lg group-hover:text-sky-500'>
              {heading}
            </h2>
            <p className='text-sm text-slate-700 truncate transition-all md:text-base text-ellipsis group-hover:text-sky-900'>
              {blurb}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
