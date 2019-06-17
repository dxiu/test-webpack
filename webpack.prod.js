'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin') // 压缩js
const OptimizeCssAssestsWebpackPlugin = require('optimize-css-assets-webpack-plugin') // 优化压缩css
const common = require('./webpack.common')
module.exports = merge(common, {
  module: {
    rules: []
  },
  plugins: [
    new UglifyJSPlugin({}),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new OptimizeCssAssestsWebpackPlugin({})
  ],
  mode: 'production'
})