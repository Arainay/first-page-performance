const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin');
const argv = require('yargs').argv;
const prod = require('./webpack.prod.js');

const isCompress = argv.compress;

const additionalPlugins = isCompress ? [
  new CompressionPlugin({
    test: /\.js(\?.*)?$/i,
    cache: true,
    deleteOriginalAssets: false
  }),
  new HtmlWebpackChangeAssetsExtensionPlugin()
] : [];

module.exports = merge(prod, {
  plugins: [
    ...additionalPlugins
  ]
});
