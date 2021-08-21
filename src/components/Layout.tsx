import React, { ReactElement } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Head from 'next/head';

interface Props {
  title: String;
  description?: string;
  className?: String;
  children?: React.ReactNode;
}

export default function Layout({
  children,
  className,
  title,
  description = 'Ananya Lohani is a 3rd year undergrad student majoring in CSE at IIIT Delhi.',
}: Props): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
      </Head>
      <div className='flex flex-col w-full min-h-screen'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </>
  );
}
