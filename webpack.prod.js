const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  externals: [nodeExternals()]
})
