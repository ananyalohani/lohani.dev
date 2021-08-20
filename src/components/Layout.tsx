import React, { ReactElement } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Head from 'next/head';

interface Props {
  className?: String;
  children?: React.ReactNode;
}

export default function Layout({ children, className }: Props): ReactElement {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
