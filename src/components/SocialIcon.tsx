import React from 'react';
import { IconType } from 'react-icons/lib';

const SocialIcon = ({
  Icon,
  className,
}: {
  Icon: IconType;
  className?: String;
}) => (
  <Icon
    className={`w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700 ${className}`}
  />
);

export default SocialIcon;
