const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const resolveConfig = require('./webpack.config.resolve');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
  },
  resolve: resolveConfig,
  output: {
    path: path.resolve(__dirname, '../build'),
    library: 'action-utils',
    libraryTarget: 'commonjs2',
    filename: 'index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname, '..') }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};
