const [main, _renderer] = require('react-electron-webpack-config')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const renderer = {
  ..._renderer,
  plugins: [
    ..._renderer.plugins,
    new MonacoWebpackPlugin() 
  ]
}
const config = [main, renderer]
module.exports = config