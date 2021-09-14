import React, { ReactElement, ReactNode } from 'react';
import tw from 'twin.macro';
import FocusTrap from 'focus-trap-react';

interface Props {
  className?: string;
  open: Boolean;
  children: ReactNode;
  onClose?: (...props: any) => any;
  onOpen?: (...props: any) => any;
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function Modal({
  className,
  open,
  children,
  onOpen,
  onClose,
}: Props): ReactElement {
  return (
    <div
      css={[
        tw`fixed top-0 left-0 z-30 flex w-screen h-full min-h-screen m-0 transition-all duration-500 bg-gray-700 bg-opacity-75 backdrop-filter backdrop-blur-sm`,
        open ? tw`block` : tw`hidden`,
      ]}
    >
      <div className='flex items-center justify-center w-full h-full'>
        <FocusTrap
          focusTrapOptions={{
            onDeactivate: onClose!,
            onActivate: onOpen!,
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
          }}
        >
          <div className={`trap py-6 px-8 bg-white rounded-xl ${className}`}>
            {children}
          </div>
        </FocusTrap>
      </div>
    </div>
  );
}
