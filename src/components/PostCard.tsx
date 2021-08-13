import React from 'react';

interface Props {
  heading: String;
  blurb: String;
}

export default function PostCard({ heading, blurb }: Props) {
  return (
    <div className='max-w-xs p-4 transition-all border-2 border-gray-200 rounded-md cursor-pointer bg-gray-50 group hover:bg-sky-100 hover:border-sky-200'>
      <h3 className='text-lg transition-all group-hover:text-sky-400'>
        {heading}
      </h3>
      <p className='text-sm text-gray-700 transition-all group-hover:text-sky-900'>
        {blurb}
      </p>
    </div>
  );
}
