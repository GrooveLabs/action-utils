const path = require('path');
const merge = require('webpack-merge');
const WebpackDashboard = require('webpack-dashboard/plugin');

const common = require('./webpack.config.common');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'build'),
    port: 9000,
  },
  watch: true,
  plugins: [
    new WebpackDashboard(),
  ],
});
