import React from 'react';
import tw from 'twin.macro';
import Link from 'next/link';

interface Props {
  className?: string;
  color?: string;
  link?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export default function Button({
  className,
  color,
  id,
  link,
  type = 'button',
  children,
}: Props): React.ReactElement {
  const newTab = !link?.startsWith('/');

  return (
    <button
      className={`py-2 px-3 transition-all ease-out border border-gray-300 rounded-md cursor-pointer bg-gray-50 text-gray-700 group text-sm font-semibold ${className}`}
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
      type={type}
    >
      {link ? (
        <Link href={link}>
          <a
            target={newTab ? '_blank' : ''}
            className='flex flex-row items-center space-x-3 btn-link'
            rel='noopener'
          >
            {children}
          </a>
        </Link>
      ) : (
        <>{children}</>
      )}
    </button>
  );
}
