const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index',
  mode: 'production',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  },
  output: {
    publicPath: 'https://etabrizi-micro-front-end-auth.netlify.app/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      library: { type: 'var', name: 'auth' },
      filename: 'remote.js',
      exposes: {
        './ReactApp': './src/App',
      },
      shared: dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
