
import { IBuildPaths, IBuldEnv } from './config/build/types/config';
import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpaclConfig';


export default (env: IBuldEnv) => {
  // создаем объект путей с помощью типа BuildPaths
const paths:IBuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = env.mode || 'development';
const PORT = env.port || 3000;

const isDev = mode === 'development';

// указываем тип для конфига
const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev, 
  port: PORT
})

  return config
};