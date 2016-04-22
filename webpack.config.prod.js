var path = require('path')

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
  vue: {
    loaders: {
      scss: 'style!css!sass',
      exclude: 'node_modules'
    }
  }
}
