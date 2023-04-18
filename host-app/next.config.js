const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
            remote: `auth@${process.env.NEXT_AUTH_URL}remote.js`,
            remote2: `shop@${process.env.NEXT_SHOP_URL}remote.js`
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
    }

    return config;
  },
};
