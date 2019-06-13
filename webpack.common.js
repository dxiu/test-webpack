'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'project-webpack-react',
      template: 'index.html'
    }),
    new CleanWebpackPlugin(),
    // 提取公共的js到单独的文件
    new webpack.optimize.SplitChunksPlugin({
      // 指定公共的名称
      name: 'common'
    })
  ]
}