'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    path.join(__dirname, 'source', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.scss']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      include: /source/,
      loaders: ["style", "css", "sass?outputStyle=expanded"]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      include: /source/,
      loader: 'babel'
    }
    ]
  }
})
