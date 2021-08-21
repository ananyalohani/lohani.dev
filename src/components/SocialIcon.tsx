import React from 'react';
import tw from 'twin.macro';
import { IconType } from 'react-icons/lib';

interface Props {
  color?: String;
  Icon: IconType;
  className?: String;
  onClick?: (...props: any) => any;
}

const SocialIcon = ({ color, Icon, className, onClick }: Props) => (
  <div
    css={[
      tw`transition-all hover:filter hover:brightness-75`,
      color === 'sky'
        ? tw`text-sky-500`
        : color === 'dark-blue'
        ? tw`text-sky-800`
        : color === 'teal'
        ? tw`text-teal-500`
        : color === 'green'
        ? tw`text-green-500`
        : tw`text-gray-600`,
    ]}
  >
    <Icon
      className={`w-5 h-5 cursor-pointer ${className}`}
      onClick={onClick!}
    />
  </div>
);

export default SocialIcon;
