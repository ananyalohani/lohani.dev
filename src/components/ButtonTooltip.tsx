import React, { ReactElement } from 'react';
import Tooltip from '~/components/Tooltip';

interface Props {
  label: string;
  children: React.ReactNode;
}

export default function ButtonTooltip({
  label,
  children,
}: Props): ReactElement {
  return (
    <Tooltip title={label}>
      <button aria-label={label}>{children}</button>
    </Tooltip>
  );
}
