// @flow

const merge = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common')

const sourcePath = path.join(process.cwd(), 'src')

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: sourcePath,
  },
  stats: 'errors-only',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'nosources-source-map',
})
