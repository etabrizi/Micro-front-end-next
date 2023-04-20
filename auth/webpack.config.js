const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const { dependencies } = require('./package.json');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

const devConfig = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shop',
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
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new Dotenv()
  ],  
};

module.exports = merge(commonConfig, devConfig)
