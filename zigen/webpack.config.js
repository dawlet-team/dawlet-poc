const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// get all dawlets from src/dawlets dir
const entries = fs.readdirSync(path.resolve(__dirname, 'src/dawlets')).reduce(
  (acc, name) => {
    acc[name] = path.join(__dirname, 'src/dawlets', name, `${name}.js`);
    return acc;
  },
  { corelet: './src/corelet/index.js' }
);
const htmls = Object.keys(entries).map(name => {
  return new HtmlWebpackPlugin({
    title: name,
    template: path.dirname(entries[name]) + '/index.html',
    filename: `${name}.html`,
    inject: false,
  });
});

module.exports = {
  mode: 'development',
  entry: entries,
  target: 'electron-renderer',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
      },
    ],
  },
  plugins: [...htmls],
};
