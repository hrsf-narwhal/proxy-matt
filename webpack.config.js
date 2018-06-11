const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
	},
	watch: true,
  
  module: {
    rules: [

      { 
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        include: /client/,
        options: {
          presets: ['env', 'react']
        }
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }

    ]//rules
  },//module

  plugins: [

    new HtmlWebpackPlugin({
      title: 'Itsy',
      template: 'client/index.html',
      inject: false
    }),

    new MiniCssExtractPlugin({
      filename: "app.css"
    })


  ]//plugins

};
