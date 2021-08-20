import React, { ReactElement, useState, useEffect, ReactNode } from 'react';
import tw from 'twin.macro';

interface Props {
  className?: String;
  open?: boolean;
  children: ReactNode;
}

export default function Modal({
  className,
  open = false,
  children,
}: Props): ReactElement {
  return (
    <div
      css={[
        tw`fixed top-0 left-0 z-30 flex w-screen h-full min-h-screen m-0 bg-gray-700 bg-opacity-75 backdrop-filter backdrop-blur-sm`,
        open ? tw`block` : tw`hidden`,
      ]}
    >
      <div className='flex items-center justify-center w-full h-full'>
        <div className={`py-6 px-8 bg-white rounded-xl ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
