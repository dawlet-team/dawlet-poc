const HtmlWebpackPlugin = require('html-webpack-plugin')
/** @type import('webpack').Configuration */
module.exports = {
  entry: "./src/renderer/index.tsx",
  target: "electron-renderer",
  devtool: 'source-map',
  module: { rules: [{
    test: /\.ts(x?)$/,
    include: /src/,
    use: [{ loader: 'ts-loader' }]
  }] },
  output: {
    path: process.cwd() + "/lib/renderer",
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/renderer/index.html'
    })
  ],
  resolve: {
    extensions: [".js", "jsx", ".json", ".ts", ".tsx"]
  }
};
