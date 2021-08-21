import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import { IconType } from 'react-icons/lib';

interface Props {
  text: String;
  Icon?: IconType | ReactElement;
  className?: string;
  color?: String;
  link?: string;
  id?: string;
}

export default function Button({
  text,
  Icon,
  className,
  color,
  id,
  link,
}: Props): ReactElement {
  return (
    <button
      className={`p-2 transition-all ease-out border-2 border-gray-300 rounded-md cursor-pointer bg-gray-50 text-gray-700 group ${className}`}
      id={id}
      css={[
        color === 'blue'
          ? tw`hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 hover:border-opacity-30`
          : color === 'dark-blue'
          ? tw`hover:bg-sky-50 hover:border-sky-800 hover:text-sky-800 hover:border-opacity-30`
          : color === 'pink'
          ? tw`hover:bg-pink-50 hover:border-pink-500 hover:text-pink-500 hover:border-opacity-30`
          : color === 'black'
          ? tw`hover:bg-black hover:bg-opacity-10 hover:border-black hover:text-black hover:border-opacity-20`
          : color === 'indigo'
          ? tw`hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 hover:border-opacity-30`
          : color === 'teal'
          ? tw`hover:bg-teal-50 hover:border-teal-500 hover:text-teal-500 hover:border-opacity-30`
          : tw`hover:bg-sky-100 hover:border-sky-200 hover:text-sky-500`,
      ]}
    >
      <a
        href={link}
        target='_blank'
        className='flex flex-row items-center space-x-3 btn-link'
      >
        {/* @ts-ignore */}
        {Icon && <Icon className='w-5 h-5' />}
        <div className='text-sm font-bold sm:text-base'>{text}</div>
      </a>
    </button>
  );
}
