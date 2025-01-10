const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
})
