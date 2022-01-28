const path = require('path');

module.exports = {
  mode: 'development',
  // entry: path.resolve(__dirname, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(),
    },
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
