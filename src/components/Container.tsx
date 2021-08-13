import React, { ReactElement } from 'react';
import tw from 'twin.macro';

interface Props {
  heading?: String;
  size?: 'big' | 'small';
  className?: String;
  children: React.ReactNode;
}

export default function Container({
  heading,
  size = 'big',
  className,
  children,
}: Props): ReactElement {
  return (
    <div className={`max-w-4xl mx-auto w-11/12 ${className}`}>
      {heading && (
        <h1 css={[tw`mb-8`, size === 'small' ? tw`text-3xl` : tw`text-4xl`]}>
          {heading}
        </h1>
      )}
      {children}
    </div>
  );
}
