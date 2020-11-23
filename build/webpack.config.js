const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') //这里引入插件npm i -D html-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin')   //这里引入插件npm i -D clean-webpack-plugin
module.exports = {
  mode: 'development', // 开发模式
  entry: path.resolve(__dirname, '../src/index.js'), // 入口文件
  output: {
    filename: '[name].[hash].js', // 打包后的文件名称
    path: path.resolve(__dirname, '../dist') // 出口的文件夹
  },
  //插件注入
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CleanWebpackPlugin()
  ]
}