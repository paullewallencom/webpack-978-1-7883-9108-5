var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'app.bundle.js'
  },
  devServer: {
    compress: true,
    port: 8080,
    hot: true
    // stats: "errors-only",
    // open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader',  'css-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
          // ['style-loader', 'css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=[name].[ext]&outputPath=/images/',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: 'babel-loader'
      // },
      // {
      //   test: /\.jsx$/,
      //   exclude: /node_modules/,
      //   use: 'babel-loader'
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack template 123',
        minify: {
          collapseWhitespace: true
        },
        hash: true,
        template: 'src/index.ejs',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new ExtractTextPlugin({
        filename: 'app.css',
        disable: false,
        allChunks: true
      })
  ]
}
