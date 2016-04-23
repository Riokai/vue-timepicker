var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.vue',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-timepicker.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  vue: {
    loaders: {
      scss: 'style!css!sass',
      exclude: 'node_modules'
    }
  }
}
