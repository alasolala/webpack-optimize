const path = require('path')
const merge = require('webpack-merge').merge
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    proxy: {
      '/': {
          target : "https://movie.douban.com",
          secure: false,
          changeOrigin : true
      }
    }
  }

})