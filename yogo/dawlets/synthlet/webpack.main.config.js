/** @type import('webpack').Configuration */
module.exports = {
  entry: "./src/main/index.ts",
  target: "electron-main",
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: "ts-loader" }]
      }
    ]
  },
  output: {
    path: process.cwd() + "/lib/main",
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};
