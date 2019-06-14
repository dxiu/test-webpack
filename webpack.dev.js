'use strict'
const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: []
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
})