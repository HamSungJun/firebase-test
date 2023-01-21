const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.dev.js',
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: '127.0.0.1',
    port: 5800,
  },
})
