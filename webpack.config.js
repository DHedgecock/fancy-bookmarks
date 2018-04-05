const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')

const PATHS = {
  appEntry: resolve('./app/index.js'),
  appSrc: resolve('app'),
  nodeModules: resolve('node_modules'),
  outputPath: resolve('dist')
}

module.exports = env => ({
  mode: 'development',

  entry: PATHS.appEntry,
  output: {
    path: PATHS.outputPath,
    filename: 'static/app.js',
    libraryTarget: 'commonjs2'
  },

  devtool: 'eval',

  // These options change how modules are resolved.
  // https://webpack.js.org/configuration/resolve/
  resolve: {
    // Allow resolving js and jsx files
    extensions: ['.js', '.jsx', '.json'],
    // Tell webpack what directories should be searched when resolving modules.
    // Including `appSrc` allows for importing modules relative to /src directory!
    modules: [PATHS.nodeModules, PATHS.appSrc],
    // Alias can be used to point imports to specific modules
    alias: {}
  },

  target: 'electron-renderer',
  externals: [nodeExternals()],
  node: {
    __dirname: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
})
