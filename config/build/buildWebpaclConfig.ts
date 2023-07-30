import { Configuration } from "webpack";
import { IBuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";
import { buildDevServer } from "./buildDevServer";

// переносим всю конфигурацию проекта сюда, который принимает тип BuildOptions
// и возвращает тип webpack.Configuration


export function buildWebpackConfig(options: IBuildOptions): Configuration {

// деструктуризируем options
  const {mode, paths, isDev} = options

  return {
  mode: mode,

// Точка входа указывает, какой модуль веб-пакет должен использовать, чтобы начать построение своего внутреннего графа зависимостей.
  entry : paths.entry,
  
//for TS  
// Конфигурируем лоадеры, которые необходимы для обработки файлов вне js - Это файлы css, png, jpeg, gif, svg, ts
//  создаем папку конфиг и в buldLoaders и переносим туда все лоадеры и вызываем функцию
  module: {
    rules: buildLoaders(options) 
    },

// указываем расширения файлов, чтобы не указывать расширение при импорте файла из компонента 
// в папку конфиг и в buildResolves и переносим туда все расширения и вызываем функцию
  resolve: buildResolves(),

// Свойство output сообщает веб-пакету, куда создавать пакеты, которые он создает, и как называть эти файлы. По умолчанию это ./dist/main.js для основного выходного файла и папка ./dist для любого другого сгенерированного файла.
  output : {
    filename: '[name].js',
    path: paths.build,
    clean: true,
  },


// устанавливаем плагины: для HTML
// Переносим все плагины в папку config в buildPlugins и вызываем эту функцию  
  plugins: buildPlugins(options),


//Чтобы упростить отслеживание ошибок и предупреждений, JavaScript предлагает исходные карты, которые сопоставляют ваш скомпилированный код с исходным исходным кодом. Если ошибка возникает из-за b.js, исходная карта сообщит вам именно об этом.
// чтобы в проде не показывало ошибок и занимало минимальное кол-во размера задаем условие
// в dev режиме inline-source-map показывает ошибки
  devtool: isDev ? 'inline-source-map' : undefined,
  devServer: isDev ? buildDevServer(options): undefined,
}
}