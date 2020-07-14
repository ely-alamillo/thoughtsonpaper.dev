import Head from 'next/head';

import '../styles/base.scss';

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og;
  const title = pageProps.data?.title;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content={title || `Ely Alamillo`} />
        <meta property="og:site_name" content={`thoughts on " paper "`} />
        <meta
          property="og:description"
          content={
            og
              ? og.description
              : `An attempt to getting my thought on " paper ".`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_elyalamillo" />
        <meta
          property="og:image"
          content={
            og ? og.image : `https://${process.env.VERCEL_URL}/og/page-card.svg`
          }
        />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>

        <title>{title || `Ely Alamillo`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
