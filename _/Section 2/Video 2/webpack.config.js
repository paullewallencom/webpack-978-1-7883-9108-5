var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    // stats: "errors-only",
    // open: true
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
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
      })
  ]
}
