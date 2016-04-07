'use strict';

const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin()
];
const entry = [
  path.join(__dirname, 'client/index.jsx')
];

if (process.env.NODE_ENV !== 'production') {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  entry.unshift('webpack-hot-middleware/client');
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
};

