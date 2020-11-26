const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withTM = require('next-transpile-modules')([
  'react-flexbox-grid',
  'react-syntax-highlighter',
]);

const withCSSPlugin = [withCSS];

const withSASSPlugin = [withSASS];

const plugins = [withCSSPlugin, withSASSPlugin, withTM];
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = withPlugins(plugins, nextConfig);
