const webpack = require('webpack')

module.exports = {
  entry: [
    './src/webpack-entry.txt'
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
