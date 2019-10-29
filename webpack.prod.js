const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {
  rules,
  output,
  resolve
} = require('./webpack.shared.config')

module.exports = {
  name: 'ssr-demo',
  mode: 'production',
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
      })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({
      sourceMap: true
    })]
  },
  resolve
}
