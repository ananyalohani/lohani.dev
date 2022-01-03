import React from 'react';
import { MdOutlineWebAsset } from 'react-icons/md';
import {
  FaBehanceSquare,
  FaGithub,
  FaLink,
  FaYoutube,
  FaFigma,
} from 'react-icons/fa';
import { Project } from '~/lib/data/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const { title, links, description, image, tags } = project;

  return (
    <div className='w-full p-4 transition-all border-2 rounded-lg bg-slate-50 sm:p-6 border-slate-200 '>
      <div className='flex flex-col-reverse sm:flex-row sm:space-x-3 btn-link'>
        <div className='flex flex-col space-y-2'>
          <div className='flex flex-row items-center'>
            <h2 className='text-xl leading-6 transition-all md:text-2xl'>
              {title}
            </h2>
            <div className='flex flex-row items-center ml-3 space-x-2'>
              {links.map((item) => (
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener'
                  key={item.type}
                >
                  {item.type === 'website' ? (
                    <MdOutlineWebAsset className='h-7 w-7 text-slate-700 hover:text-sky-500' />
                  ) : item.type === 'github' ? (
                    <FaGithub className='w-6 h-6 text-slate-700 hover:text-sky-500' />
                  ) : item.type === 'behance' ? (
                    <FaBehanceSquare className='w-6 h-6 text-slate-700 hover:text-sky-500' />
                  ) : item.type === 'youtube' ? (
                    <FaYoutube className='w-6 h-6 text-slate-700 hover:text-sky-500' />
                  ) : item.type === 'figma' ? (
                    <FaFigma className='w-5 h-5 text-slate-700 hover:text-sky-500' />
                  ) : (
                    <FaLink className='w-6 h-6 text-slate-700 hover:text-sky-500' />
                  )}
                </a>
              ))}
            </div>
          </div>
          <p className='text-sm transition-all text-slate-700 md:text-base'>
            {description}
          </p>
          <div className='flex flex-row flex-wrap gap-2'>
            {tags.map((tag) => (
              <div
                className='px-2 py-1 text-xs border rounded bg-sky-100 text-sky-500 border-sky-200 md:text-sm'
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <img
          src={image}
          className='mb-3 rounded sm:max-w-xs sm:mb-0'
          alt={title}
        />
      </div>
    </div>
  );
}
