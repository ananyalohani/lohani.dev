import React, { ReactElement } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

interface Props {
  className?: String;
  children?: React.ReactNode;
}

export default function Layout({ children, className }: Props): ReactElement {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
