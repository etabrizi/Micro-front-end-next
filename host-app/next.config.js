const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
            remote: 'auth@https://etabrizi-micro-front-end-auth.netlify.app/remote.js',
            remote2: 'shop@https://etabrizi-micro-front-end-shop.netlify.app/remote.js'
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
    }

    return config;
  },
};
