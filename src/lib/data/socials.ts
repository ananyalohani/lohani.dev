import {
  FaLinkedinIn,
  FaBehance,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaTelegramPlane,
} from 'react-icons/fa';
import Polywork from '~/components/Polywork';
import { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

const socials: Social[] = [
  {
    color: 'black',
    icon: FaGithub,
    text: 'GitHub',
    link: 'https://github.com/ananyalohani',
  },
  {
    color: 'sky',
    icon: FaTwitter,
    text: 'Twitter',
    link: 'https://twitter.com/ananyalohani_',
  },
  {
    color: 'pink',
    icon: FaInstagram,
    text: 'Instagram',
    link: 'https://instagram.com/ananyalohani',
  },
  {
    color: 'indigo',
    icon: Polywork,
    text: 'Polywork',
    link: 'https://www.polywork.com/ananyalohani',
  },
  {
    color: 'dark-blue',
    icon: FaLinkedinIn,
    text: 'LinkedIn',
    link: 'https://linkedin.com/in/ananyalohani',
  },
  {
    color: 'blue',
    icon: FaBehance,
    text: 'Behance',
    link: 'https://www.behance.net/ananyalohani',
  },
  {
    color: 'sky',
    icon: FaTelegramPlane,
    text: 'Telegram',
    link: 'https://t.me/ananyalohani',
  },
  {
    color: 'teal',
    icon: FaEnvelope,
    text: 'Email',
    link: 'mailto:ananya@lohani.dev',
  },
];

export interface Social {
  color: string;
  text: String;
  icon: IconType | (({ dimensions }: any) => ReactElement);
  link: string;
}

export default socials;