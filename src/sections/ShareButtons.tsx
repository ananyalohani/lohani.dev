import React, { ReactElement } from 'react';
import { shareSocials } from '~/lib/data/socials';
import SocialIcon from '~/components/SocialIcon';

interface Props {
  url: string;
}

export default function ShareButtons({ url }: Props): ReactElement {
  return (
    <div className='flex flex-row justify-around w-full'>
      {shareSocials.map((s) => (
        <button className=''>
          <s.shareComponent url={url}>
            <SocialIcon
              Icon={s.icon}
              className='w-7 h-7'
              name={s.name}
              label={`Share to ${s.name}`}
            />
          </s.shareComponent>
        </button>
      ))}
    </div>
  );
}
