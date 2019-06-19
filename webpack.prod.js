'use strict'
const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin') // 压缩js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssestsWebpackPlugin = require('optimize-css-assets-webpack-plugin') // 优化压缩css
const common = require('./webpack.common')

const setMAP = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
  
  entryFiles.map(entryFile => {
    const mathArr = entryFile.match(/src\/(.*)\/index\.js/)
    const pageName = mathArr && mathArr[1]
    entry[pageName] = entryFile
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    )
  })
  return {
    entry,
    htmlWebpackPlugins
  }
}
const { entry, htmlWebpackPlugins } = setMAP()
module.exports = merge(common, {
  entry: entry,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  module: {
    rules: []
  },
  plugins: [
    new UglifyJSPlugin({}),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new OptimizeCssAssestsWebpackPlugin({})
  ].concat(htmlWebpackPlugins),
  mode: 'production'
})