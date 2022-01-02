import React from 'react';
import Link from 'next/link';
import { MdOutlineWebAsset } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

interface Props {
  title: string;
  mainLink: string;
  links: {
    type: 'website' | 'github' | 'behance' | 'youtube';
    link: string;
  }[];
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  mainLink,
  title,
  links,
  description,
  image,
  tags,
}: Props) {
  return (
    <div className='transition-all bg-gray-50 p-4 sm:p-6 border-2 border-gray-200 rounded-lg w-full '>
      {/* <Link href={mainLink}> */}
      <a className='flex flex-col-reverse sm:flex-row sm:space-x-3 btn-link'>
        <div className='flex flex-col space-y-2'>
          <div className='flex flex-row items-center'>
            <h2 className='text-xl leading-6 transition-all md:text-2xl'>
              {title}
            </h2>
            <div className='ml-3 flex flex-row space-x-2 items-center'>
              {links.map((item) => {
                if (item.type === 'website')
                  return (
                    <a href={item.link} target='_blank' rel='noopener'>
                      <MdOutlineWebAsset className='h-7 w-7 text-gray-700 hover:text-sky-500' />
                    </a>
                  );
                if (item.type === 'github')
                  return (
                    <a href={item.link} target='_blank' rel='noopener'>
                      <AiFillGithub className='h-6 w-6 text-gray-700 hover:text-sky-500' />
                    </a>
                  );
              })}
            </div>
          </div>
          <p className='text-sm text-gray-700 transition-all md:text-base'>
            {description}
          </p>
          <div className='flex flex-row flex-wrap gap-2'>
            {tags.map((tag) => (
              <div className='text-xs bg-sky-100 text-sky-500 py-1 px-2 border border-sky-200 md:text-sm rounded'>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <img
          src={image}
          className='sm:max-w-xs rounded mb-3 sm:mb-0'
          alt={title}
        />
      </a>
      {/* </Link> */}
    </div>
  );
}
