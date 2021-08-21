import '~/styles/tailwind.css';
import '~/styles/clear-sans.css';
import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Container } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.SITE_URL);
  return (
    <Container>
      <DefaultSeo
        defaultTitle='Ananya Lohani'
        titleTemplate='Ananya Lohani • %s'
        description='Ananya Lohani is a 3rd year undergrad student majoring in CSE at IIIT Delhi.'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: process.env.SITE_URL,
          site_name: 'Ananya Lohani',
          title: 'Ananya Lohani',
          description:
            'Ananya Lohani is a 3rd year undergrad student majoring in CSE at IIIT Delhi.',
        }}
        twitter={{
          handle: '@ananyalohani_',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </Container>
  );
}
export default MyApp;
