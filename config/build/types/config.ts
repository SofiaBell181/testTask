export type BuildMode = 'production' | 'development'


export interface IBuildPaths {
  entry: string,
  build: string,
  html: string
}

export interface IBuldEnv {
  mode: BuildMode,
  port: number
}

export interface IBuildOptions {
  mode: BuildMode,
  paths : IBuildPaths,
  isDev : boolean,
  port: number,
}