/*
 * @Author: your name
 * @Date: 2021-10-01 11:03:57
 * @LastEditTime: 2021-10-01 23:15:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-template/config/webpack.common.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    filename: `js/[name]${isDev ? "" : ".[hash:8]"}.js`,
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      name: true,
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
};
