import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IBuildOptions } from "./types/config";


export function buildPlugins(options: IBuildOptions): WebpackPluginInstance[] { // типизируем плагин webpack
  
  const {paths} = options
  
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    })
  ]
  
}