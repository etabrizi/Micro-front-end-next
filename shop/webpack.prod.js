const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const { dependencies } = require('./package.json');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

const prodConfig = {
  entry: './src/index',
  mode: 'production',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: null,
  },
  output: {
    publicPath: process.env.PUBLIC_SHOP_PATH,
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
      filename:"[name]-[contenthash].css"
    }),
    new Dotenv()
  ],  
};


module.exports = merge(commonConfig, prodConfig)