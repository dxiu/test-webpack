'use strict'
const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin') // 压缩js
const OptimizeCssAssestsWebpackPlugin = require('optimize-css-assets-webpack-plugin') // 优化压缩css
const common = require('./webpack.common')

const setMAP = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
  // entryFiles.
  console.log('entryFiles',entryFiles)
  return {
    entry,
    htmlWebpackPlugins
  }
}
setMAP()
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