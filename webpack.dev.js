// @flow

import merge from 'webpack-merge'
import path from 'path'
import webpack from 'webpack'

import common from './webpack.common'

const sourcePath = path.join(process.cwd(), 'src')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: [sourcePath, 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'],
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
})
