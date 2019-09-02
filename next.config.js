const path = require('path');
const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');

module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@pages": path.resolve(__dirname, 'pages/'),
      "@components": path.resolve(__dirname, 'components/'),
      "@static": path.resolve(__dirname, 'static/'),
      "@config": path.resolve(__dirname, 'config.js')
    };

    return config;
  }
});