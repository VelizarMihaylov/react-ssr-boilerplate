const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  rules,
  output,
  resolve
} = require('./webpack.shared.config')

module.exports = {
  name: 'ssr-demo',
  mode: 'development',
  entry: [
    path.resolve('./', 'client/src/index.js')],
  module: {
    rules
  },
  output,
  plugins: [
    new CleanWebpackPlugin(
      [
        path.resolve('./', 'dist/public/')
      ], {
        root: path.resolve('./')
      }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/src/index.html')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/public/')
  },
  resolve
}
