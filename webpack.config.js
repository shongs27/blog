const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { bindActionCreators } = require('redux');

module.exports = {
  mode: 'development',
  // entry: path.resolve(__dirname, 'src/index.jsx'),
  // output: {
  // path: path.resolve(__dirname, 'dist'),
  // publicPath: '/',
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@actions': path.resolve(__dirname, 'src/actions'),
      //   '@': path.resolve(__dirname, ''),
      //   '@components': path.resolve(__dirname, 'src/components'),
      //   '@containers': path.resolve(__dirname, 'src/containers'),
      //   '@pages': path.resolve(__dirname, 'src/pages'),
      //   '@modules': path.resolve(__dirname, 'src/modules'),
      //   '@libs': path.resolve(__dirname, 'src/libs'),
      //   '@utils': path.resolve(__dirname, 'src/utils'),
      //   '@plugins': path.resolve(__dirname, 'src/plugins'),
      //   '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      baseName: JSON.stringify('/'),

      // baseName: JSON.stringify('/project-react-6-shongs27'),
    }),
  ],
};
