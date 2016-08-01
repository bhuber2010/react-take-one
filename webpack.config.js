var path = require('path');
var webpack = require('webpack');
var validate = require('webpack-validator');

module.exports = validate({
  devtool: 'eval',
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js"]
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1/:3000',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    "./app/index"
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      }
    ]
  }
})
