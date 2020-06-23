const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

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
    hot: true,
    inline: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    },
    disableHostCheck: true
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
      },
      {
        test: /\.(svg|ico)$/,
        exclude: /node_modules/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [{ from: 'assets', to: 'assets' }]
    })
  ]
}
