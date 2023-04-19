const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const { dependencies } = require('./package.json');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devConfig = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  output: {
    publicPath: 'http://localhost:3002/',
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
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],  
};

module.exports = merge(commonConfig, devConfig)
