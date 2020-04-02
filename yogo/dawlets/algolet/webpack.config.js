const main = require('./webpack.main.config')
const _renderer = require('./webpack.renderer.config')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const monacoRules = [{
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}, {
  test: /\.ttf$/,
  use: ['file-loader']
}]
const renderer = {
  ..._renderer,
  plugins: [
    ..._renderer.plugins,
    new MonacoWebpackPlugin({
      languages: ['javascript', 'typescript']
    }) 
  ],
  module: {
    rules: [
      ..._renderer.module.rules,
      ...monacoRules
    ]
  }
}
const config = [main, renderer]
module.exports = config