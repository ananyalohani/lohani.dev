import '~/styles/tailwind.css';
import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <>
      <DefaultSeo
        defaultTitle='Ananya Lohani'
        titleTemplate='Ananya Lohani • %s'
        description='Ananya Lohani is a 3rd year undergrad student majoring in CSE at IIIT Delhi.'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: url,
          site_name: 'Ananya Lohani',
          title: 'Ananya Lohani',
          description:
            'Ananya Lohani is a 3rd year undergrad student majoring in CSE at IIIT Delhi.',
          images: [
            {
              url: `${url}/images/ananya-seo.png`,
              alt: 'Ananya Lohani',
            },
          ],
        }}
        twitter={{
          handle: '@ananyalohani_',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
