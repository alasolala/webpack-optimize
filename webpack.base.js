const webpack = require("webpack")
const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader','css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader','css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')]
        // exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: 'img/[name].[contenthash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',    
      filename: 'index.html',  
      hash: true, 
      inject: true, 
      minify: {
        removeComments: true, 
        collapseWhitespace: true
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, '/src')
    }
  }
}