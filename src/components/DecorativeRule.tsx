import React, { ReactElement } from 'react';

export default function DecorativeRule(): ReactElement {
  return (
    <div className='flex flex-row items-center w-full my-10 space-x-5'>
      <div className='flex-1 h-px bg-gray-300'></div>
      <div className='w-1.5 h-1.5 bg-gray-300 rounded-full'></div>
      <div className='flex-1 h-px bg-gray-300'></div>
    </div>
  );
}
