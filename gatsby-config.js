module.exports = {
  siteMetadata: {
    title: 'Ely Alamillo',
    siteUrl: 'https://www.elyalamillo.com',
    description: 'My creative outlet',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-135086350-1',
        // Puts tracking script in the head instead of the body
        head: true,
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        siteSpeedSampleRate: 10,
        cookieDomain: 'elyalamillo.com',
        cookieName: 'x-tracking',
      },
    },
  ],
}
