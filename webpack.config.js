const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  mode: process.env.mode,
  // entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@fixture': path.resolve(__dirname, 'fixture'),
      '@storage': path.resolve(__dirname, 'src/services.storage'),
      //   '@components': path.resolve(__dirname, 'src/components'),
      //   '@containers': path.resolve(__dirname, 'src/containers'),
      //   '@pages': path.resolve(__dirname, 'src/pages'),
      //   '@modules': path.resolve(__dirname, 'src/modules'),
      //   '@libs': path.resolve(__dirname, 'src/libs'),
      //   '@utils': path.resolve(__dirname, 'src/utils'),
      //   '@plugins': path.resolve(__dirname, 'src/plugins'),
    },
  },
  devServer: {
    historyApiFallback: true,
    static: [
      {
        directory: path.join(__dirname, 'public/img'),
        publicPath: '/img',
      },
      {
        directory: path.join(__dirname, 'public/mortyGame'),
        publicPath: '/mortyGame',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
