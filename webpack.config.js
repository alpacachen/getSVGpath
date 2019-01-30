const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './test/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'test/dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './test/dist',
    // hot: true
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};
