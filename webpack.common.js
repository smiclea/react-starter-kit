// @flow

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const HappyPack = require('happypack')

const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const outputPath = path.join(process.cwd(), 'dist')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: './assets/[hash].[ext]',
        },
      },
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'happypack/loader' },
    ],
  },
  output: {
    filename: '[name].js',
    path: outputPath,
    publicPath,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html'),
    }),
    new ProgressPlugin(),
    new HappyPack({ loaders: ['babel-loader'] }),
  ],
}
