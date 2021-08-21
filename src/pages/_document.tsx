import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import crypto from 'crypto';
import { v4 } from 'uuid';

const generateCsp = (): [csp: string, nonce: string] => {
  const production = process.env.NODE_ENV === 'production';

  // generate random nonce converted to base64. Must be different on every HTTP page load
  const hash = crypto.createHash('sha256');
  hash.update(v4());
  const nonce = hash.digest('base64');

  let csp = ``;
  csp += `default-src 'self';`;
  csp += `base-uri 'self';`;
  csp += `style-src https://fonts.googleapis.com 'unsafe-inline';`; // NextJS requires 'unsafe-inline'
  csp += `script-src 'nonce-${nonce}' 'self' ${
    production ? '' : "'unsafe-eval'"
  };`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
  csp += `font-src 'self' https://fonts.gstatic.com;`;
  csp += `img-src 'self';`;
  if (!production) csp += `connect-src 'self';`;

  return [csp, nonce];
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const [csp, nonce] = generateCsp();

    return (
      <Html lang='en'>
        <Head nonce={nonce}>
          <meta property='csp-nonce' content={nonce} />
          <meta httpEquiv='Content-Security-Policy' content={csp} />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
