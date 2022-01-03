import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import { IconType } from 'react-icons/lib';

interface Props {
  text: string;
  Icon?: IconType | ReactElement;
  className?: string;
  color?: string;
  link?: string;
  id?: string;
  type?: string;
}

export default function Button({
  text,
  Icon,
  className,
  color,
  id,
  link,
  type,
}: Props): ReactElement {
  return (
    <button
      className={`py-2 px-3 transition-all ease-out border border-slate-300 rounded-md cursor-pointer bg-slate-50 text-slate-700 group ${className}`}
      id={id}
      css={[
        color === 'blue'
          ? tw`hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 hover:border-opacity-30`
          : color === 'dark-blue'
          ? tw`hover:bg-sky-50 hover:border-sky-800 hover:text-sky-800 hover:border-opacity-30`
          : color === 'pink'
          ? tw`hover:bg-pink-50 hover:border-pink-500 hover:text-pink-500 hover:border-opacity-30`
          : color === 'black'
          ? tw`hover:bg-black hover:bg-opacity-5 hover:border-black hover:text-black hover:border-opacity-20`
          : color === 'indigo'
          ? tw`hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 hover:border-opacity-30`
          : color === 'teal'
          ? tw`hover:bg-teal-50 hover:border-teal-500 hover:text-teal-500 hover:border-opacity-30`
          : tw`hover:bg-sky-50 hover:border-sky-200 hover:text-sky-500`,
      ]}
      // @ts-ignore
      type={type ? type : 'button'}
    >
      <a
        href={link}
        target='_blank'
        className='flex flex-row items-center space-x-3 btn-link'
        rel='noopener'
      >
        {/* @ts-ignore */}
        {Icon && <Icon className='w-5 h-5' />}
        <div className='text-sm font-semibold'>{text}</div>
      </a>
    </button>
  );
}
