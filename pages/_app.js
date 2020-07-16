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
        <meta property="og:title" content={title || `thoughts on "paper"`} />
        <meta property="og:site_name" content={`thoughts on "paper"`} />
        <meta
          property="og:description"
          content={
            og
              ? og.description
              : `An attempt to getting my thoughts on " paper ".`
          }
        />
        <meta
          property="og:image"
          content={
            og
              ? og.image
              : `https://personal-site-git-blog.elyalamillo.vercel.app/og/page-card.png`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_elyalamillo" />
        <meta
          name="twitter:image"
          content={
            og
              ? og.image
              : `https://personal-site-git-blog.elyalamillo.vercel.app/og/page-card.png`
          }
        />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>

        <title>{title || `thoughts on "paper"`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
