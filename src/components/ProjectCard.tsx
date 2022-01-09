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
import tw from 'twin.macro';

interface Props {
  project: Project;
  size?: 'small' | 'big';
}

export default function ProjectCard({ project, size = 'big' }: Props) {
  const { title, links, description, image, tags } = project;

  return (
    <div
      css={[
        tw`w-full transition-all border-2 border-gray-200 rounded-lg bg-gray-50`,
        size === 'big' ? tw`p-4 sm:p-6` : tw`p-4`,
      ]}
    >
      <div
        className='btn-link'
        css={[
          tw`flex flex-col-reverse`,
          size === 'big' && tw`sm:flex-row sm:space-x-3`,
        ]}
      >
        <div className='flex flex-col space-y-2'>
          <div className='flex flex-row items-center'>
            <h2
              className='text-xl leading-6 transition-all md:text-2xl'
              css={[
                tw`text-xl leading-6 transition-all`,
                size === 'small' ? tw`md:text-xl` : tw`md:text-2xl`,
              ]}
            >
              {title}
            </h2>
            <div className='flex flex-row items-center ml-3 space-x-2'>
              {links.map((item, key) => (
                <a
                  href={item.link}
                  key={key}
                  target='_blank'
                  rel='noopener'
                  className='text-gray-700 hover:text-sky-500 btn-link'
                >
                  {item.type === 'website' ? (
                    <MdOutlineWebAsset className=' h-7 w-7' />
                  ) : item.type === 'github' ? (
                    <FaGithub className='w-6 h-6' />
                  ) : item.type === 'behance' ? (
                    <FaBehanceSquare className='w-6 h-6' />
                  ) : item.type === 'youtube' ? (
                    <FaYoutube className='w-6 h-6' />
                  ) : item.type === 'figma' ? (
                    <FaFigma className='w-5 h-5' />
                  ) : (
                    <FaLink className='w-6 h-6' />
                  )}
                </a>
              ))}
            </div>
          </div>
          <p className='text-sm text-gray-700 transition-all md:text-base'>
            {description}
          </p>
          <div
            css={[
              size === 'big' ? tw`flex flex-row flex-wrap gap-2` : tw`hidden`,
            ]}
          >
            {tags.map((tag, key) => (
              <div
                key={key}
                className='px-2 py-1 text-xs border rounded bg-sky-100 text-sky-500 border-sky-200 md:text-sm'
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <img
          src={image}
          css={[tw`mb-5 rounded`, size === 'big' && tw`sm:max-w-xs sm:mb-0`]}
          alt={title}
        />
      </div>
    </div>
  );
}
