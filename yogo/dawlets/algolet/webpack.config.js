const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const monacoRules = [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  },
  {
    test: /\.ttf$/,
    use: ["file-loader"]
  }
];

/** @type import('webpack').Configuration */
module.exports = {
  entry: "./renderer/index.tsx",
  target: "electron-renderer",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: /renderer/,
        use: [{
          loader: "esbuild-loader",
          options: {
            loader: "tsx"
          }
        }]
      },
      {
        test: /\.xml$/,
        use: 'raw-loader'
      },
      ...monacoRules
    ]
  },
  output: {
    path: process.cwd() + "/lib/renderer",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./renderer/index.html"
    }),
    new MonacoWebpackPlugin({
      languages: ["javascript", "typescript"]
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'assets',
          to: '../assets'
        }
      ]
    })
  ],
  resolve: {
    extensions: [".js", "jsx", ".json", ".ts", ".tsx"]
  }
};
