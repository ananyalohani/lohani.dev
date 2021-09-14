import React from 'react';
import { IconType } from 'react-icons/lib';
import tw from 'twin.macro';

interface Props {
  name?: string;
  Icon: IconType;
  className?: string;
  onClick?: (...props: any) => any;
}

const SocialIcon = ({ name, Icon, className, onClick }: Props) => {
  return (
    <div
      css={[
        tw`transition-all hover:filter hover:brightness-75`,
        name === 'Twitter' || name === 'Telegram'
          ? tw`text-sky-500`
          : name === 'Linkedin' || name === 'Facebook'
          ? tw`text-sky-800`
          : name === 'Email'
          ? tw`text-teal-500`
          : name === 'Whatsapp'
          ? tw`text-green-500`
          : name === 'Reddit'
          ? tw`text-orange-600`
          : tw`text-gray-600`,
      ]}
    >
      <Icon
        className={`w-5 h-5 cursor-pointer ${className}`}
        onClick={onClick!}
      />
    </div>
  );
};

export default SocialIcon;
