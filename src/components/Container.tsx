import React, { ReactElement } from 'react';
import tw from 'twin.macro';

interface Props {
  heading?: string;
  headingSize?: 'big' | 'small';
  size?: 'big' | 'small';
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  heading,
  headingSize = 'big',
  size = 'big',
  className,
  children,
}: Props): ReactElement {
  return (
    <div
      className={`mx-auto w-11/12 ${className}`}
      css={[size === 'small' ? tw`max-w-2xl` : tw`max-w-3xl`]}
    >
      {heading && (
        <h1
          css={[
            tw`mb-8`,
            headingSize === 'small'
              ? tw`text-2xl sm:text-3xl`
              : tw`text-3xl sm:text-4xl`,
          ]}
        >
          {heading}
        </h1>
      )}
      {children}
    </div>
  );
}
