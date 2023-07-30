import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule }  from "webpack"
import { IBuildOptions } from "./types/config"

export function buildLoaders(options: IBuildOptions): RuleSetRule[] { // // типизируем лоадеры webpack
  
const {isDev} = options;



const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    
}
  // css loaders
const cssLoader =   {
    test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          // задаем условие в зависимости от вида разработки 
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }


  // если не используем TS, то нужен babel-loader
  // babel берет новый стандарт js и перегоняет его в старый, чтобы все браузеры поддерживались
const typeScriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }

const fileLoader =  {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    };


const font =  {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    };


  return  [ 
      typeScriptLoader, 
      cssLoader,
      svgLoader,
      fileLoader,
      font
    ]
}