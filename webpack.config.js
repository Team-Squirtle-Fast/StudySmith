const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
            template: path.resolve(__dirname, "src/index.html"),
        }),
    ],
  module:{
    rules:[
      {
        test: /\.m?(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource'
      },
    ]
  },
  devServer: {
    port: 8080,
    static: {
        directory: path.join(__dirname)
    },
    proxy: {
      '/api': 'http://localhost:3000',
      secure: false,
    },
  }
}