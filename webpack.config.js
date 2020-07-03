const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '/assets/'

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
    // publicPath: ASSET_PATH
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    hot: true,
    inline: true,
    writeToDisk: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    },
    disableHostCheck: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(s[ac]ss|min.css)$/i,
        use: [
          'style-loader', // Translates CSS into CommonJS
          'css-loader', // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' },
        { from: 'public/manifest.json', to: 'manifest.json' },
        { from: 'public/robots.txt', to: 'robots.txt' },
        { from: 'public/CNAME' }
      ]
    })
  ]
}
