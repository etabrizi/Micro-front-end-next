const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index',
  mode: process.env.NODE_ENV === "production" ? 'production': 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port :  process.env.NODE_ENV === "production" ? null : 3002
  },
  output: {
    publicPath: process.env.NODE_ENV === "production" ? 'https://etabrizi-micro-front-end-shop.netlify.app/' : 'http://localhost:3002/',
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
      name: 'shop',
      library: { type: 'var', name: 'shop' },
      filename: 'remote.js',
      exposes: {
        './ReactApp2': './src/ShopApp',
      },
      shared: dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],  
};
