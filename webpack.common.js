const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  target: ['web'],
  entry: path.resolve(__dirname, 'src/main.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'Todo',
      type: 'umd',
      export: 'default',
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.(j|t)s$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: path.resolve(__dirname, 'dist/index.html'),
    }),
  ],
}
