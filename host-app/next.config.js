const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
            remote: `auth@${process.env.NODE_ENV === "production" ? 'https://etabrizi-micro-front-end-auth.netlify.app/' : 'http://localhost:3001'}/remote.js`,
            remote2: `shop@${process.env.NODE_ENV === "production" ? 'https://etabrizi-micro-front-end-shop.netlify.app/' : 'http://localhost:3002'}/remote.js`
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
    }

    return config;
  },
};
