/*
 * @Author: your name
 * @Date: 2021-10-01 11:03:39
 * @LastEditTime: 2021-10-01 22:39:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-template/config/webpack.dev.js
 */
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "../dist"),
    compress: false,
    open: true,
    hot: true, // 热更新
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
