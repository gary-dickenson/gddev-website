const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js', devtool: 'inline-source-map', plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development', template: './public/index.html'
    }), new CopyPlugin({
      patterns: [
        { from: 'assets', to: 'assets' }]
    })], output: {
    filename: '[name].bundle.js', path: path.resolve(__dirname, 'dist')
  }, devServer: {
    // contentBase: './public'
  }, module: {
    rules: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.css$/i, exclude: /node_modules/, use: ['style-loader', 'css-loader']
      }, {
        test: /\.(s[ac]ss|min.css)$/i, use: [
          // Creates `style` nodes from JS strings
          'style-loader', // Translates CSS into CommonJS
          'css-loader', // Compiles Sass to CSS
          'sass-loader']
      }, {
        test: /\.(svg|ico)$/, exclude: /node_modules/, use: [
          'url-loader']
      }]
  }
}
