import React, { ReactElement } from 'react';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

interface Props {
  title?: string;
  html?: ReactElement;
  children: React.ReactNode;
}

export default function TooltipComponent({
  title,
  html,
  children,
}: Props): ReactElement {
  return (
    <Tooltip
      title={title}
      arrow={true}
      position={'top'}
      animation={'shift'}
      arrowSize={'small'}
      duration={200}
      size={'small'}
      distance={10}
      theme={'transparent'}
      html={html}
    >
      {children}
    </Tooltip>
  );
}
